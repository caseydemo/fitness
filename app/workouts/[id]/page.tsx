"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getWorkoutByWorkoutId } from "@/app/actions/workout";
import Card from "@app/components/Card";
import { WorkoutType } from "@/app/types";
import WorkoutView from "./WorkoutView";
import AddExerciseToWorkoutButton from "./AddExerciseToWorkoutButton";

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
            {/* <ExerciseView 
                    loading={loading}
                    exercises={exercises}
                    handleChange={handleChange}
                    handleEdit={handleEdit}
                    handleSave={handleSave}
                    handleDelete={handleDelete}
                    editRows={editRows}
                />
             */}
            
			{loading ? (
				<p>Loading...</p>
			) : (
                <>
                <AddExerciseToWorkoutButton workoutId={workoutId} />
				<WorkoutView workout={workout} loading={loading} />
                </>
			)}
		</div>
	);
}
