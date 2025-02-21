import Card from "../components/Card";
export default function ExerciseView(props: any) {
	const { loading, exercises, editRows, handleEdit, handleSave, handleChange, handleDelete } = props;	
    return (
		<>
			{/* add loading state */}
			{loading && <p>Loading...</p>}
			{/* add table to display exercises */}
			{!loading && exercises.length === 0 && <p>No exercises found</p>}
			{exercises && exercises.length > 0}
			<Card title='exercises'>
				<table className='table table-dark table-striped'>
					<thead>
						<tr>
							{Object.keys(exercises[0] || {}).map((key) => (
								<th key={key}>{key}</th>
							))}
							<th>Update</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{exercises.map((exercise, index) => (
							<tr key={index}>
								{Object.keys(exercise).map((key) => (
									<td key={key}>
										{editRows[index] ? (
											<input
												type='text'
												value={exercise[key]}
												onChange={(e) =>
													handleChange(
														index,
														key,
														e.target.value
													)
												}
											/>
										) : (
											exercise[key]
										)}
									</td>
								))}
								<td>
									{editRows[index] ? (
										<button
											onClick={() =>
												handleSave(index, exercise)
											}
										>
											Save
										</button>
									) : (
										<button
											onClick={() => handleEdit(index)}
										>
											Edit
										</button>
									)}
								</td>
								<td>
									<button
										onClick={() => {
											handleDelete(index, exercise);
										}}
									>
										delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</Card>
		</>
	);
}
