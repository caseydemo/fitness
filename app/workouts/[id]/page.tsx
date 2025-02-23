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
		console.log("use effect called");
		getWorkoutByWorkoutId(workoutId).then((data) => {
			console.log("get workout by workout id called");

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

					{/* loop over all the groups named 'exercises' and just print the name out for now */}

					{workout.exercises.map((exercise) => (
						<Card title={exercise.name}>
							{exercise.notes && (
								<div>notes: {exercise.notes}</div>
							)}
							<div className="container">
								{exercise.sets.map((set, setIndex) => (
									<div
										key={`${exercise.name}-set-${setIndex}`}
									>
										weight: {set.weight}, reps:{" "}
										{set.reps}{" "}
										{exercise.notes &&
											`, notes: ${exercise.notes}`}
									</div>
								))}
							</div>
							{console.log(exercise)}
						</Card>
					))}
				</Card>
			)}
		</div>
	);
}
