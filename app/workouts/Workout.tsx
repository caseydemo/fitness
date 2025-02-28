"use client";
import { useEffect, useState } from "react";
import Card from "../components/Card"
import { getWorkoutById } from "../actions/workout";
export default function Workout({ id }: { id: number }) {
    
    const [loading, setLoading] = useState(true);
    const [workout, setWorkout] = useState({});

    useEffect(() => {
        const workout = getWorkoutById(id);        
        workout.then((workout) => {
            console.log("workout: ", workout);
            setWorkout(workout);
            setLoading(false);
        });        
        
    }, [id]);

    return (
        <Card title='Workout'>            
            <p>worktout id: {id}</p>
        </Card>
    )
}