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
        const conn = await dbConnect();
        const logs = await conn.model("Log").aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "user_id",
                    foreignField: "_id",
                    as: "user",
                },
            },
            {
                $lookup: {
                    from: "exercises",
                    localField: "exercise_id",
                    foreignField: "_id",
                    as: "exercise",
                },
            },
            {
                $unwind: "$user",
            },
            {
                $unwind: "$exercise",
            },
        ]);
        return logs;
    } catch (error) {
        console.error("Error getting logs:", error);
        throw new Error("Error getting logs");
    }
};
