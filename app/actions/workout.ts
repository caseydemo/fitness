"use server";
// import { ExerciseType } from "../types";
import Workout from "../models/Workout";
import dbConnect from "../lib/mongodb";

export async function getWorkouts() {
	try {
		// use mongoose to get all logs
		await dbConnect();		
		const workouts = await Workout.find();
		if (!workouts || workouts.length === 0) {
			console.log("No workouts found");
			return [];
		} else {
			
			// return id, name and description
			return workouts.map((workout) => workout.toJSON());
		}
	} catch (error) {
		console.error("get workouts: ", error);
		return [];
	}
}

export async function getWorkoutById(id: string) {
    try {
        // use mongoose to get all logs
        await dbConnect();		
        const workout = await Workout.findById(id);
        if (!workout) {
            console.log("No workout found");
            return null;
        } else {
            console.log("workout found");
            // return id, name and description
            return workout.toJSON();
        }
    } catch (error) {
        console.error("get individual workout by id: ", error);
        return null;
    }
}

