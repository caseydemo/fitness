"use client";
import { useState, useEffect } from "react";
import AddExerciseToWorkoutButton from "@/app/components/AddExerciseToWorkoutButton";
import ExerciseSelect from "@/app/components/ExerciseSelect";
import Card from "@/app/components/Card";
import styles from "./add-exercise-input.module.css";
import { getExercises } from "@/app/actions/exercise";
import { addExerciseToWorkout } from "@/app/actions/workout";

type AddExerciseInputProps = {
	workoutId: number;
};

export default function AddExerciseInput({
	workoutId: workoutId,
}: AddExerciseInputProps) {
	// create a loading state
	const [loading, setLoading] = useState(true);

	// create a state to hold all the exercises
	const [exercises, setExercises] = useState([]);

	// create a stateful variable for the selected exercise
	const [selectedExercise, setSelectedExercise] = useState<string | null>(
		null
	);

	// on initial page load call a user action to get the exercises
	useEffect(() => {
		getExercises().then((data) => {
			setExercises(data);
			setLoading(false);
		});
	}, []);

	// function to handle button click
	function handleAddExerciseToWorkout() {

        // if the user has not selected an exercise, put error message on screen above the button
        if (!selectedExercise) {
            alert("Please select an exercise");
            return;
        }
        try {
            // call the action to add the exercise to the workout
            addExerciseToWorkout(workoutId, selectedExercise);
        } catch (error) {
            console.error("error adding exercise to workout: ", error);
        }
		
	}

	return loading ? (
		<p>Loading...</p>
	) : (
		<Card
			title='Add Exercise'
			extraClasses={styles.card}
		>
			<div className={`input-group ${styles.container}`}>
				<div className='form-control'>
					<ExerciseSelect
						exercises={exercises}
						setSelectedExercise={(event) =>
							setSelectedExercise(event.target.value)
						}
						selectedExercise={selectedExercise}
					/>
				</div>
				<div className='form-control'>
					<AddExerciseToWorkoutButton
						workoutId={workoutId}
						handleAddExerciseToWorkout={handleAddExerciseToWorkout}
					/>
				</div>
			</div>
		</Card>
	);
}
