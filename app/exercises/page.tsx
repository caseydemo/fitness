import Exercises from "./Exercises"
import Link from "next/link";
export default function ExercisesPage() {
    return (
        <div>
            <Link href="/">Back Home</Link>
            <Exercises />
        </div>
    )
}