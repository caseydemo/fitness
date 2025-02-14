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