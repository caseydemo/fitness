"use client";
import { ExerciseType } from "./types";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { getExercises, createExercise, updateExercise } from "./actions/exercise";
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
	useEffect(() => {
		getExercises().then((data) => {
			setExercises(data);
			setLoading(false);
		});
	}, []);

	const handleEdit = (index: number) => {
		console.log("index:", index);
		setEditRows({ ...editRows, [index]: true });
		console.log("editRows", editRows);
	};

	const handleSave = (index: number, exercise: any) => {
		updateExercise(exercise)
		setEditRows({ ...editRows, [index]: false });
	};

	const handleChange = (index: number, key: string, value: string) => {
		const updatedData = exercises.map((row, i) =>
		  i === index ? { ...row, [key]: value } : row
		);
		setExercises(updatedData);
	};

	return (
		<main className="">
			<Card title="Inputs" extraClasses="input_card">
				<form ref={form} onSubmit={handleSubmit}>
					<div className="container">
						<div className="row">
							<div className="col-sm">
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
							</div>

							<div className="col-sm">
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
							</div>
						</div>
						<div className="row">
							<button
								type="submit"
								className="btn btn-primary"
							>
								Submit
							</button>
						</div>
					</div>
				</form>
			</Card>

			{/* add loading state */}
			{loading && <p>Loading...</p>}
			{/* add table to display exercises */}
			{!loading && exercises.length === 0 && <p>No exercises found</p>}
			{exercises && exercises.length > 0}
			<Card title="exercises">
				<table className="table table-dark table-striped">
					<thead>
					<tr>
						{Object.keys(exercises[0] || {}).map((key) => (
							<th key={key}>{key}</th>
						))}
						<th>Actions</th>
					</tr>
					</thead>
					<tbody>
						{exercises.map((exercise, index) => (
						<tr key={index}>
							{Object.keys(exercise).map((key) => (
							  <td key={key}>
								{editRows[index] ? (
								  <input
									type="text"
									value={exercise[key]}
									onChange={(e) => handleChange(index, key, e.target.value)}
								  />
								) : (
									exercise[key]
								)}
							  </td>
							))}
							<td>
							  {editRows[index] ? (
								<button onClick={() => handleSave(index, exercise)}>Save</button>
							  ) : (
								<button onClick={() => handleEdit(index)}>Edit</button>
							  )}
							</td>
						  </tr>
						))}
					</tbody>
				</table>
			</Card>
		</main>
	);
}
