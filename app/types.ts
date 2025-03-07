export type ExerciseType = {
    id?: string;
    name: string;
    description: string;
};

export type SetType = {
    reps: number;
    weight: number;    
    notes?: string;
}

export type ExerciseLogType = {
    id?: string;
    name: string;
    notes?: string;    
    exercise: ExerciseType;
    sets: SetType[];
}

export type WorkoutType = {
    workoutId?: number;
    id: string;
    started: string;
    ended?: string;
    exercises: ExerciseLogType[];
    notes?: string;
}

