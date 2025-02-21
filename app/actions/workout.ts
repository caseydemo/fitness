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
			console.log("workouts found");
			// return id, name and description
			return workouts.map((workout) => workout.toJSON());
		}
	} catch (error) {
		console.error("getLogs", error);
		return [];
	}
}


