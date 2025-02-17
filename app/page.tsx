"use client";
import { ExerciseType } from "./types";
import { useEffect, useRef, useState } from "react";
import Exercises from "./components/exercises/Exercises";

import { getExercises, createExercise, updateExercise, deleteExercise } from "./actions/exercise";
import Card from "./components/Card";

export default function Home() {
	const [exercises, setExercises] = useState([] as ExerciseType[]);
	const [loading, setLoading] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		description: "",
	});
	const form = useRef<HTMLFormElement | null>(null);
	const [editRows, setEditRows] = useState({});

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			if (!formData.name || !formData.description) {
				throw new Error("missing input!");
			}
			const newExercise = await createExercise(formData); // call the action to create an exercise
			setExercises([...exercises, newExercise]); // add the new exercise to the list of exercises
			setFormData({ name: "", description: "" }); // clears out the inputs
		} catch (error) {
			console.error(error);
		}
	};

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// on initial page load call a user action to get the exercises
	// useEffect(() => {
	// 	getExercises().then((data) => {
	// 		setExercises(data);
	// 		setLoading(false);
	// 	});
	// }, []);

	const handleEdit = (index: number) => {
		console.log("index:", index);
		setEditRows({ ...editRows, [index]: true });
		console.log("editRows", editRows);
	};

	const handleSave = (index: number, exercise: ExerciseType) => {
		updateExercise(exercise)
		setEditRows({ ...editRows, [index]: false });
	};

	const handleChange = (index: number, key: string, value: string) => {
		const updatedData = exercises.map((row, i) =>
		  i === index ? { ...row, [key]: value } : row
		);
		setExercises(updatedData);
	};

	const handleDelete = (index: number, exercise: ExerciseType) => {
		if(!index || !exercise || !exercise.id) {
			console.error('missing delete parameters')
		}
		deleteExercise(exercise.id)
		// remove this index from the exercises object
		setExercises(exercises.filter((v, i) => i !== index));

	}

	return (
		<main className="">
            <Exercises />			
		</main>
	);
}
