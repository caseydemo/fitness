import Link from "next/link";
export default function Home() {

	return (
		<main className="">
            <Link href="/exercises">Exercises</Link>
            <Link href="/logs">Logs</Link>
		</main>
	);
}
