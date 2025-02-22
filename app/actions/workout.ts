"use server";
// import { ExerciseType } from "../types";
import Workout from "../models/Workout";
import dbConnect from "../lib/mongodb";
import { WorkoutType } from "../types";

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

export async function getWorkoutByWorkoutId(workoutId: number) {
	try {
        await dbConnect();


		// To find documents where 'fieldName' is equal to 'value'
		const workout = await Workout.find({ workoutId: workoutId });
        if (!workout) {
            console.log('no documents found')
            throw new Error("could not find document")
        } else {
            // success
            
            return toJSON(workout[0])
        }
        
	} catch (error) {
        console.error('another error:', error)
        return null;
    }
}


function toJSON (workout) {
    return {
        id: workout._id.toString(),
        started: workout.started,
        ended: workout.ended,
        exercises: workout.exercises,
        notes: workout.notes,
        workoutId: workout.workoutId
    } as WorkoutType;
};
