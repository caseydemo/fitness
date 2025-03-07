import Card from "@/app/components/Card";
import { WorkoutType } from "@/app/types";

interface WorkoutViewProps {
	workout: WorkoutType;
	loading: boolean;
}

export default function WorkoutView({ workout, loading }: WorkoutViewProps) {
	console.log("workout:", workout);
	return (
		<div>
			<h2>Workout View</h2>
			{loading ? (
				<p>Loading...</p>
			) : (
				<Card title={`Date: ${workout.started}`}>
					<div>notes: {workout.notes ? workout.notes : "N/A"}</div>
					{workout.exercises.map((exercise) => (
						<Card
							title={exercise.name}
							key={`card-${workout.id}-${exercise.name}`}
						>
							<div>notes: {exercise.notes}</div>
							<table
								className='table'
								key={`table-${workout.id}-${exercise.name}`}
							>
								<thead className='table'>
									<tr>
										<th>Reps</th>
										<th>Weight</th>
										<th>Notes</th>
									</tr>
								</thead>
								<tbody>
									{exercise.sets.map((set, index) => (
										<tr
											key={`${exercise.name}-set-${index}-table-${workout.id}`}
										>
											<td>{set.reps}</td>
											<td>{set.weight}</td>
											<td>{set.notes}</td>
										</tr>
									))}
								</tbody>
							</table>
						</Card>
					))}
				</Card>
			)}
		</div>
	);
}
