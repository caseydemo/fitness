"use server";
import { ExerciseType } from "../types";
import Exercise from "../models/Exercise";
import dbConnect from "../lib/mongodb";

export async function getExercises() {
    try {
        // use mongoose to get all exercises
        const db = await dbConnect();
        const exercises = await Exercise.find();
        
        // return id, name and description
        return exercises.map((exercise) => {
            return {
                id: exercise._id.toString(),
                name: exercise.name,
                description: exercise.description
            } as ExerciseType;
        });

        
    } catch (error) {
        console.error("getExercises", error);
        return [];
    }
    // return [{ name: "Exercise 1", description: "This is exercise 1" } as Exercise];
}

export async function createExercise(formData: ExerciseType) {
    try {
        // use mongoose to create a new exercise
        const db = await dbConnect();
        const exercise = new Exercise(formData);
        const newExercise = await exercise.save();
        return {
            id: newExercise._id.toString(),
            name: newExercise.name,
            description: newExercise.description
        } as ExerciseType;
    } catch (error) {
        console.error("createExercise", error);
        return {} as ExerciseType;
    }
}