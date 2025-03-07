"use server";
// import { ExerciseType } from "../types";
import Workout from "../models/Workout";
import dbConnect from "../lib/mongodb";


export async function createWorkout() {
    try {
        await dbConnect();
        
        const workout = {
            started: new Date(),
            exercises: [],            
        };
        const newWorkout = new Workout(workout);
        const savedWorkout = await newWorkout.save();
        return savedWorkout.toJSON();
    } catch (error) {
        console.error("create workout: ", error);
        return null;
    }
}

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

			return {
				id: workout[0]._id.toString(),
				started: workout[0].started.toLocaleDateString(),
				exercises: workout[0].exercises,
				ended: workout[0].ended ?? workout[0].notes,
				workoutId: workout[0].workoutId
			}

        }
        
	} catch (error) {
        console.error('another error:', error)
        return null;
    }
}
