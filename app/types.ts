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
    exercise: ExerciseType;
    sets: SetType[];
}

export type LogType = {
    id: string;
    time_started: Date;
    time_ended: Date;
    exercises: ExerciseLogType[];
    notes: string;
}