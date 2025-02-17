export default function ExerciseForm(props: any) {
    const { handleSubmit, formRef, formData, handleFormChange } = props;
    return (
        <>        
        <form ref={formRef} onSubmit={handleSubmit}>
					<div className="container">
						<div className="row">
							<div className="col-sm">
								<label className="input-group-text">
									Name:
									<input
										className="form-control"
										type="text"
										value={formData.name}
										name="name"
										onChange={handleFormChange}
									/>
								</label>
							</div>

							<div className="col-sm">
								<label className="input-group-text">
									Description:
									<input
										className="form-control"
										type="text"
										value={formData.description}
										name="description"
										onChange={handleFormChange}
									/>
								</label>
							</div>
						</div>
						<div className="row">
							<button
								type="submit"
								className="btn btn-primary"
							>
								Submit
							</button>
						</div>
					</div>
				</form>
        </>
    )
}