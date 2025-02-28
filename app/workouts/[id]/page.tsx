"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getWorkoutByWorkoutId } from "@/app/actions/workout";
import Card from "@app/components/Card";
import { WorkoutType } from "@/app/types";
import WorkoutView from "./WorkoutView";

export default function Page() {
	const params = useParams();
	const workoutId = Number(params.id);
	const [loading, setLoading] = useState(true);
	const [workout, setWorkout] = useState({} as WorkoutType);

	// on initial page load call a user action to get the exercises
	useEffect(() => {
		getWorkoutByWorkoutId(workoutId).then((data) => {
			if (data) {
				setWorkout({ ...data, notes: data.notes || "" });
			}
			setLoading(false);
		});
	}, []);

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<Card title={`Workout ID: ${workoutId}`}>
					<h3>Date: {workout.started.toString()}</h3>

					{/* loop over all the groups named 'exercises' and just print the name out for now */}

					{/* <WorkoutView workout={workout} /> */}

					{workout.exercises.map((exercise) => (
						<Card
							title={exercise.name}
							key={`card-${workout.id}-${exercise.name}`}
						>
							<div>notes: {exercise.notes}</div>
							<table
								className='table'
								key={`table-${workout.id}-${exercise.name}`}
							>
								<thead className='table'>
									<tr>
										<th>Reps</th>
										<th>Weight</th>
										<th>Notes</th>
									</tr>
								</thead>
								<tbody>
									{exercise.sets.map((set, index) => (
										<tr
											key={`${exercise.name}-set-${index}-table-${workout.id}`}
										>
											<td>{set.reps}</td>
											<td>{set.weight}</td>
											<td>{set.notes}</td>
										</tr>
									))}
								</tbody>
							</table>
						</Card>
					))}
				</Card>
			)}
		</div>
	);
}
