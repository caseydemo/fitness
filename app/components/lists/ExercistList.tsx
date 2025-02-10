import { getAllExercises } from "@/app/lib/db";
export default async function ExerciseList() {
	const exercises = await getAllExercises();
	return (
		<>
			<table>
				<thead>
					<tr>
						<th>name</th>
						<th>description</th>
					</tr>
				</thead>
				<tbody>
					{exercises &&
						exercises.map((exercise) => (
							<tr key={exercise.id}>
								<td>{exercise.name}</td>
								<td>{exercise.description}</td>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
}
