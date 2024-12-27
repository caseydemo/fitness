// use the useFetchLogs hook to fetch logs and display them in a table
"use client";
import useFetchLogs from "@/app/hooks/useFetchLogs";
import { useEffect } from "react";
import styles from "./styles/log-display.module.css";

export default function LogDisplay() {
    const { logs, loading, error } = useFetchLogs();

    useEffect(() => {
        console.log(logs);
    }, [logs]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.toString()}</p>;
    }

    return (
        <table className={styles.log_display}>
            <thead>
                <tr>
                    <th>user</th>
                    <th>date</th>
                    <th>exercise</th>
                    <th>weight</th>
                    <th>reps</th>
                    <th>notes</th>
                </tr>
            </thead>
            <tbody>
                {logs.map((log) => (
                    <tr key={log._id}>
                        <td>{log.user_name}</td>
                        <td>{log.date}</td>
                        <td>{log.exercise_name}</td>
                        <td>{log.weight}</td>
                        <td>{log.reps.join(", ")}</td>
                        <td>{log.notes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
