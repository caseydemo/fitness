"use client";
import { ExerciseType } from "./types";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { getExercises, createExercise } from "./actions/exercise";
import Card from "./components/Card";

export default function Home() {
	const [exercises, setExercises] = useState([] as ExerciseType[]);
	const [loading, setLoading] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		description: "",
	});
	const form = useRef<HTMLFormElement | null>(null);

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
	useEffect(() => {
		getExercises().then((data) => {
			setExercises(data);
			setLoading(false);
		});
	}, []);

	return (
		<main className="">
			<h1>Home</h1>

			<h2>Exercise Input</h2>

			<div className="">
				<form ref={form} onSubmit={handleSubmit}>
					<div className="exercise_form_wrapper">
						<label className="input-group-text">
							Name:
							<input
								className="form-control"
								type="text"
								value={formData.name}
								name="name"
								onChange={handleFormChange}
							/>
						</label>

						<label className="input-group-text">
							Description:
							<input
								className="form-control"
								type="text"
								value={formData.description}
								name="description"
								onChange={handleFormChange}
							/>
						</label>

						<button type="submit" className="btn btn-primary">
							Submit
						</button>
					</div>
				</form>
			</div>

			<h3>Exercises</h3>
			{/* add loading state */}
			{loading && <p>Loading...</p>}
			{/* add table to display exercises */}
			{!loading && exercises.length === 0 && <p>No exercises found</p>}
			{!loading && exercises.length > 0 && (
				<div>
					<p>There are {exercises.length} exercises</p>
				</div>
			)}
			{exercises && exercises.length > 0}
			<Card title="exercises">
				<table className="table table-dark table-striped">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Description</th>
						</tr>
					</thead>
					<tbody>
						{exercises.map((exercise) => (
							<tr key={exercise.id}>
								<td>{exercise.name}</td>
								<td>{exercise.description}</td>
							</tr>
						))}
					</tbody>
				</table>
			</Card>
		</main>
	);
}
