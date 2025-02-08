import ExerciseInputForm from "../components/forms/ExerciseInputForm"
import ExerciseList from "../components/lists/ExercistList"
export default function Page() {
    return (
        <>
        <h1>Exercises</h1>

        <ExerciseList />

        <h3>Add New Exercise</h3>
        <ExerciseInputForm />
        </>
    )
}