"use client";
import { ExerciseType } from "./types";
import { useEffect, useState } from "react";

import { getExercises, createExercise } from "./actions/exercise";

export default function Home() {
	const [exercises, setExercises] = useState([] as ExerciseType[]);
	const [loading, setLoading] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		description: "",
	});

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// call the action to create an exercise
        const newExercise = await createExercise(formData);
        // add the new exercise to the list of exercises
        setExercises([...exercises, newExercise]);
	};

	// on initial page load call a user action to get the exercises
	useEffect(() => {
		getExercises().then((data) => {
			setExercises(data);
			setLoading(false);
		});
	}, []);

	return (
		<main>
			<h1>Home</h1>

			<h2>Exercise Input</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Name:
						<input
							type='text'
							value={formData.name}
							onChange={(e) =>
								setFormData({
									...formData,
									name: e.target.value,
								})
							}
						/>
					</label>
					<br />
					<label>
						Description:
						<input
							type='text'
							value={formData.description}
							onChange={(e) =>
								setFormData({
									...formData,
									description: e.target.value,
								})
							}
						/>
					</label>
					<br />
					<button type='submit'>Submit</button>
				</div>
			</form>

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
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
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
		</main>
	);
}
