"use client";
import { useEffect, useRef, useState } from "react";
import Card from "../Card";
import ExerciseForm from "./ExerciseForm";
import ExerciseView from "./ExerciseView";
import { ExerciseType } from "@/app/types";
import { createExercise, deleteExercise, getExercises, updateExercise } from "@/app/actions/exercise";


export default function Exercises() {
	// this parent component will hold the state for both the form and the view
	// it will also handle the form submission and the view of the exercises

	const formRef = useRef<HTMLFormElement | null>(null);
	const [exercises, setExercises] = useState([] as ExerciseType[]);
	const [loading, setLoading] = useState(true);
    const [editRows, setEditRows] = useState({});
	const [formData, setFormData] = useState({
		name: "",
		description: "",
	});

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

	const handleEdit = (index: number) => {
		console.log("index:", index);
		setEditRows({ ...editRows, [index]: true });
		console.log("editRows", editRows);
	};

	const handleSave = (index: number, exercise: ExerciseType) => {
		updateExercise(exercise);
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

	// on initial page load call a user action to get the exercises
	useEffect(() => {
		getExercises().then((data) => {
			setExercises(data);
			setLoading(false);
		});
	}, []);

	return (
		<>
			<Card title='Exercises'>
				<ExerciseForm
					handleSubmit={handleSubmit}
                    handleFormChange={handleFormChange}
                    formData={formData}
                    handleChange={handleChange}                    
					formRef={formRef}
				/>
				<ExerciseView 
                    loading={loading}
                    exercises={exercises}
                    handleChange={handleChange}
                    handleEdit={handleEdit}
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                    editRows={editRows}
                />
			</Card>
		</>
	);
}
