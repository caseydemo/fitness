"use client";
import { ExerciseType } from "./types";
import { useEffect, useRef, useState } from "react";
import Exercises from "./components/exercises/Exercises";

import { getExercises, createExercise, updateExercise, deleteExercise } from "./actions/exercise";
import Card from "./components/Card";

export default function Home() {

	return (
		<main className="">
            <Exercises />			
		</main>
	);
}
