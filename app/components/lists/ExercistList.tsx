import { getAllExercises } from "@/app/lib/db";
type Exercise = {
	id: number;
	name: string;
	description: string;
};
export default async function ExerciseList() {
	const exercises = (await getAllExercises()).map((exercise: any) => ({
		id: exercise._id,
		name: exercise.name,
		description: exercise.description,
	}));
	console.log(exercises);

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
						exercises.map((exercise: Exercise) => (
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
