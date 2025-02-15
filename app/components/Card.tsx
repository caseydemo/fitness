export default function Card(props: any) {
    const {title, children} = props;
	return (
		<div className="card" >
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
				<p className="card-text">
					{children}
				</p>
				<a href="#" className="card-link">
					Card link
				</a>
				<a href="#" className="card-link">
					Another link
				</a>
			</div>
		</div>
	);
}
