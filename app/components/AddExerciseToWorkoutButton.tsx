import { addExerciseToWorkout } from "@/app/actions/workout";
import styles from "./add-exercise-to-workout-button.module.css";

// make the props type
type AddExerciseToWorkoutButtonProps = {
    workoutId: number;
    handleAddExerciseToWorkout: () => void;
};
export default function AddExerciseToWorkoutButton({ workoutId, handleAddExerciseToWorkout }: AddExerciseToWorkoutButtonProps) {
    return (
        <button
            className={`btn btn-primary ${styles.button}`}
            onClick={() => {
                handleAddExerciseToWorkout();
            }}
        >
            Add Exercise
        </button>
    );
}