import styles from "./card.module.css"
export default function Card(props: any) {
    const {title, extraClasses, children} = props;

    const classes = extraClasses ? extraClasses : '';
	return (
		<div className={`${styles.card} ${classes}`} >
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<div className="card-text">
					{children}
				</div>
			</div>
		</div>
	);
}
