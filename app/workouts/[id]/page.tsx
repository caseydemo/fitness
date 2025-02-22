"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getWorkoutByWorkoutId } from "@/app/actions/workout";
import Card from "@app/components/Card";

export default function Page() {
	const params = useParams();
	const workoutId = params.id;
	const [loading, setLoading] = useState(true);
	const [workout, setWorkout] = useState({});

	// on initial page load call a user action to get the exercises
	useEffect(() => {
		console.log('use effect called')
		getWorkoutByWorkoutId(workoutId).then((data) => {
			console.log('get workout by workout id called')
		
			setWorkout(data);
			setLoading(false);
		});
	}, []);

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<Card title={`Workout ID: ${workoutId}`}>
					<h3>Date: {workout.started}</h3>
					
					<table className="table table-striped">
						<thead>
							<tr>
								<th>exercise</th>
								<th>set 1</th>
								<th>set 2</th>
								<th>set 3</th>
							</tr>
						</thead>
						<tbody>
							{workout.exercises.map((outerGroup, index) => (
								
								<tr key={index} >
									{console.log('index', index)}
									<td>{outerGroup.name}</td>
									{outerGroup.sets.map((set, innerIndex) => (
										<td key={`set-${innerIndex}`} >
											<div>weight: {set.weight}</div>
											<div>reps: {set.reps}</div>
											<div>notes: {set.notes}</div>
										</td>

									))}
									{/* <td>1</td>
									<td>1</td>
									<td>1</td> */}
								</tr>
							))}
						</tbody>
					</table>
				</Card>
			)}
		</div>
	);
}
