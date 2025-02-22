"use client";
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import { getWorkoutByWorkoutId } from "@/app/actions/workout";
import Card from "@app/components/Card"

export default function Page() {
  const params = useParams();
  const workoutId = params.id;
  const [loading, setLoading] = useState(true);
  const [workout, setWorkout] = useState({})

  	// on initial page load call a user action to get the exercises
	useEffect(() => {
		getWorkoutByWorkoutId(workoutId).then((data) => {
			setWorkout(data);
			setLoading(false);
			console.log('workout:', data)
		});
	}, []);



  return (
    <div>
	  {loading && <p>Loading...</p>}
	  {!loading && workout && (
	  <Card title={`Workout ID: ${workoutId}`}>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>1</th>
						<th>2</th>
						<th>3</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
					</tr>
				</tbody>
			</table>
	  </Card>
	  )}
    </div>
  );
}