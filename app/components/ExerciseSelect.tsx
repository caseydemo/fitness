import { set } from "mongoose";

type ExerciseSelectProps = {
    // array of exercises
    exercises: any;
    selectedExercise: any;
    // setSelectedExercise:  this is a function that takes an event and sets the selected exercise
    setSelectedExercise: React.ChangeEventHandler<HTMLSelectElement>;
};


export default function ExerciseSelect({ exercises, selectedExercise, setSelectedExercise }: ExerciseSelectProps) {
	return (

        <select value={selectedExercise || ''} onChange={setSelectedExercise}>            
            <option value="0">Select an exercise</option>
            {exercises.map((exercise: any) => (
                <option key={exercise.id} value={exercise.id}>
                    {exercise.name}
                </option>
            ))}
        </select>

	);
}
