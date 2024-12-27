export type LogResult = {
    _id: string;
    user_id: string;
    user_name: string;
    exercise_name: string;
    weight: number;
    reps: [number];
    notes?: string;
    date: string;
};