"use server";
// import { ExerciseType } from "../types";
import Log from "../models/Log";
import dbConnect from "../lib/mongodb";
import { LogType } from "../types";

export async function getLogs() {
    try {
        // use mongoose to get all logs
        await dbConnect();
        const logs = await Log.find();
        if (!logs) {
            console.error("no logs found");
            return [];
        }
        // return id, name and description
        return logs.map((log) => log.toJSON());
    } catch (error) {
        console.error("getLogs", error);
        return [];
    }
}

