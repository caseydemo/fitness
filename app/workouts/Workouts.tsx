
import { getLogs } from "../actions/workout";
export default async function Workouts() {
    const workouts = await getWorkouts();
    workouts.map((workout) => {
        console.log(workout);
    });

    return (
        <div>
            <h1>Logs</h1>
        </div>
    )
}