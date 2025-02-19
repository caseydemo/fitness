import Link from 'next/link'
import Logs from './Logs'
export default function LogsPage() {
    return (
        <div>
            <Link href="/">Back Home</Link>
            <Logs />
        </div>
    )
}