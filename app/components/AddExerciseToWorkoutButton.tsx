import { addExerciseToWorkout } from "@/app/actions/workout";
import styles from "./add-exercise-to-workout-button.module.css";

// make the props type
type AddExerciseToWorkoutButtonProps = {
    workoutId: number;
}
export default function AddExerciseToWorkoutButton({ workoutId }: AddExerciseToWorkoutButtonProps) {
    return (
        <button
            className={`btn btn-primary ${styles.button}`}
            onClick={() => {
                console.log("add exercise to workout:", workoutId);
                addExerciseToWorkout(workoutId, 1);
            }}
        >
            Add Exercise
        </button>
    );
}