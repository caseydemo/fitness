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

export function checkDb() {
	try {
		dbConnect();
	} catch (error) {
		console.error("db conn failed: ", error);
	}
}

export async function insertOne(
	formData: { name: string; description: string },
	model: string
) {
	try {
		console.log("name:", formData.name);
		console.log("description:", formData.description);
		console.log("model:", model);
	} catch (error) {
		console.error("error", error);
	}
}

export async function getAllExercises() {
	try {
		await dbConnect();
		const allExercises = await Exercise.find({});
		return allExercises;
	} catch (error) {
		console.error("error", error);
	}
}
