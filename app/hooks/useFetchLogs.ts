import { useEffect, useState, useCallback } from 'react';
import { LogResult } from '@/app/types';

export default function useFetchLogs() {
    // this is where I will get all the logs to be displayed in other components
    // the logs will be fetched from the API - stored in the database
    const [logs, setLogs] = useState<LogResult[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    // this function will fetch the logs from the API - for now no dependencies
    const fetchData = useCallback(async () => {
        try {
            const response = await fetch('/api/getAllCombinedData');
            const data = await response.json();
            let formattedData = formatData(data);
            setLogs(formattedData);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    // this will fetch the logs when the component mounts
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { logs, loading, error };
}

function formatData(data: any) {
    
    console.log('full data object', data);


    let formattedData: LogResult[] = [];
    data.forEach((log: any) => {
        
        console.log('current user name', log.user.first_name + ' ' + log.user.last_name);

        let formattedLog: LogResult = {
            _id: log._id,
            user_id: log.user_id,
            user_name: log.user.first_name + ' ' + log.user.last_name,
            exercise_name: log.exercise.name,
            weight: log.weight,
            reps: log.reps,
            notes: log.notes,
            date: log.date
        };
        formattedData.push(formattedLog);
    });
    return formattedData;
}