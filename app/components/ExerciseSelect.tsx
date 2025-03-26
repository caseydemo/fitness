export default function ExerciseSelect() {
	return (
		<>
			<select
				className='form-select'
				aria-label='Default select example'
			>
				<option selected>Please Select An Exercise</option>
				<option value='1'>One</option>
				<option value='2'>Two</option>
				<option value='3'>Three</option>
			</select>
		</>
	);
}
