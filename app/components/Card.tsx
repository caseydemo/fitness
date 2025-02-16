import styles from "./card.module.css"
export default function Card(props: any) {
    const {title, extraClasses, children} = props;

    const classes = extraClasses ? extraClasses : '';
	return (
		<div className={`${styles.card} ${classes}`} >
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
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
