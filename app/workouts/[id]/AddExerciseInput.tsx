import AddExerciseToWorkoutButton from "@/app/components/AddExerciseToWorkoutButton";
import ExerciseSelect from "@/app/components/ExerciseSelect";
import Card from "@/app/components/Card";
import styles from "./add-exercise-input.module.css";

type AddExerciseInputProps = {
	workoutId: number;
};

export default function AddExerciseInput({
	workoutId: workoutId,
}: AddExerciseInputProps) {
	return (
		<Card
			title='Add Exercise'
			extraClasses={styles.card}
		>
			<div className={`input-group ${styles.container}`}>
				<div className='form-control'>
                    <ExerciseSelect />					
				</div>
				<div className='form-control'>
					<AddExerciseToWorkoutButton workoutId={workoutId} />
				</div>
			</div>
		</Card>
	);
}
