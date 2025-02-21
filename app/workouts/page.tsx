import Link from "next/link";
import Logs from "./Workouts";
import Workouts from "./Workouts";
export default function LogsPage() {
	return (
		<div>
			<div>
				<Link href='/'>Back Home</Link>
				<Workouts />
			</div>			
		</div>
	);
}
