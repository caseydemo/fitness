// make the props type
type AddExerciseToWorkoutButtonProps = {
    workoutId: number;
}
export default function AddExerciseToWorkoutButton({ workoutId }: AddExerciseToWorkoutButtonProps) {
    return (
        <button
            onClick={() => {
                console.log("add exercise to workout:", workoutId);
            }}
        >
            Add Exercise
        </button>
    );
}