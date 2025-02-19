import Exercises from "./components/exercises/Exercises";
import Link from "next/link";
export default function Home() {

	return (
		<main className="">
            <Link href="/exercises">Exercises</Link>            
		</main>
	);
}
