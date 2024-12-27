import mongoose, { Mongoose } from "mongoose";
import User from "../model/User";
import Exercise from "../model/Exercise";
import Log from "../model/Log";
import { dbConnect } from "./db";

global.mongoose = {
    conn: null,
    promise: null,
};

// create a view that combines all the data from the three collections - connecting on user_id and exercise_id
export const getAllCombinedData = async () => {
    try {
        const conn = await dbConnect(); // make sure we're connected to the database
        const logs = await conn.model("Log").aggregate([
            {
                // join the users collection on the user_id field
                $lookup: {
                    from: "users",
                    localField: "user_id",
                    foreignField: "_id",
                    as: "user", // alias for the user data
                },
            },
            {
                // join the exercises collection on the exercise_id field
                $lookup: {
                    from: "exercises",
                    localField: "exercise_id",
                    foreignField: "_id",
                    as: "exercise", // alias for the exercise data
                },
            },
            {
                $unwind: "$user", // destructure the user data - convert the array to an object
            },
            {
                $unwind: "$exercise", // destructure the exercise data - convert the array to an object
            },
        ]);
        return logs;
    } catch (error) {
        console.error("Error getting logs:", error);
        throw new Error("Error getting logs");
    }
};
