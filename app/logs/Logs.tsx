
import { getLogs } from "../actions/log";
export default async function Logs() {
    
    const logs = await getLogs();
    logs.map((log) => {
        console.log('poop')
        console.log(log);
    });

    return (
        <div>
            <h1>Logs</h1>
        </div>
    )
}