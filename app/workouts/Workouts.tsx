"use client";
import { useEffect, useState } from "react";
import { getWorkouts, createWorkout, getWorkoutById } from "../actions/workout";
import Card from "../components/Card";
import { WorkoutType } from "../types";
import Link from "next/link";
import { get } from "http";

export default function Workouts() {
	const [loading, setLoading] = useState(true);
	const [workouts, setWorkouts] = useState([]);

	// on initial page load call a user action to get the exercises
	useEffect(() => {
		getWorkouts().then((data) => {
			setWorkouts(data);
			setLoading(false);
		});
	}, []);

	const summarizeWorkout = (workout: WorkoutType) => {
		let summary = "";
		workout.exercises.map((exercise) => {
			// just include a comma separated list with the names of each exercise in a string
			summary += exercise.name;
			// if there are more exercises to process add a comma
			if (
				workout.exercises.indexOf(exercise) <
				workout.exercises.length - 1
			) {
				summary += ", ";
			}
		});
		return summary;
	};

    const handleNewWorkoutClick = async () => {
        // what I want to happen...
        // 1. create a new workout
        // 2. redirect to the new workout/[id] page with the new workoutId

        const newWorkout = await createWorkout();
        // get the workoutId by calling getWorkoutById with the newWorkout.id
        const fullWorkoutData = await getWorkoutById(newWorkout.id)

        const workoutId = fullWorkoutData.workoutId
        
        if(workoutId) {
            window.location.href = `/workouts/${workoutId}`
        } else {
            console.error('no workoutId found')
        }
        

        
    }

	return (
		<>
            <button className="btn btn-primary" onClick={handleNewWorkoutClick}>New Workout</button>
			<Card title="Workout Summaries">
				{/* if loading display loading message - else display a table with workout summaries */}
				{loading ? (
					<p>Loading...</p>
				) : (
					<table>
						<thead>
							<tr>
								<th>Timestamp</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							{workouts.map((workout) => (                                                        
								<tr key={workout.id}>                                    
									<td>
										<Link href={`/workouts/${String(workout.workoutId)}`} >
											{
                                            workout.started.toLocaleDateString()
                                            }
										</Link>
									</td>
									<td>
										{summarizeWorkout(workout)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</Card>
		</>
	);
}
