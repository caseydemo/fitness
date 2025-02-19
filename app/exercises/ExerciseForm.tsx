import styles from './form-styles.module.css';

export default function ExerciseForm(props: any) {
	const { handleSubmit, formRef, formData, handleFormChange } = props;
	return (
		<div className='form__container'>
			<form
				ref={formRef}
				onSubmit={handleSubmit}
			>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<label className='input-group-text'>
								Name:
								<input
									className='form-control'
									type='text'
									value={formData.name}
									name='name'
									onChange={handleFormChange}
								/>
							</label>
						</div>

						<div className='col'>
							<label className='input-group-text'>
								Description:
								<input
									className='form-control'
									type='text'
									value={formData.description}
									name='description'
									onChange={handleFormChange}
								/>
							</label>
						</div>

						<div className={`col ${styles.exercise_submit_button_container}`}>
							<button
								type='submit'
								className='btn btn-sm btn-primary'
							>
								Submit
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
