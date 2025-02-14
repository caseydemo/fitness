"use server";
import dbConnect from "./mongodb";
import Exercise from "../models/Exercise";


export async function getAllExercises() {
    try {
        await dbConnect();
        const exercises = await Exercise.find().lean();
        return exercises;
    } catch (error) {
        console.error("getAllExercises", error);
        return [];
    }
}

export async function createExercise(formData: { name: string; description: string }) {
    try {
        if(!formData.name || !formData.description) {
            throw new Error("Missing required fields");
        }
        await dbConnect();
        const { name, description } = formData;
        const exercise = new Exercise({ name, description });
        await exercise.save();        
    } catch (error) {
        console.error("createExercise", error);
        throw error;
    }
}

