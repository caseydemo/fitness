import mongoose from "mongoose";
import Exercise from "../models/Exercise";

async function dbConnect() {
	const connString = process.env.MONGO_URL;
	if (connString) {
		console.log("dbConnect...");
		// @ts-ignore - this is there for some reason ts can't find it
		await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} else {
		console.error("farts");
	}
}

export async function getAllExercises() {
    await dbConnect();
    const exercises = await Exercise.find().exec();
    return exercises;
}

