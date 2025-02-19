import mongoose from "mongoose";
const { Schema } = mongoose;
import { SetType, ExerciseLogType, LogType } from "../types";

/*

this is how I want logs to be layed out

ExerciseEntry {
    - sets: [
        - reps: number
        - weight: number
        - notes: string        
    ]
}
time_started: timestamp
time_ended: timestamp
exercises: [
    exercise_1: ExerciseEntry *optional
    exercise_2: ExerciseEntry *optional
    exercise_3: ExerciseEntry *optional
    exercise_4: ExerciseEntry *optional
    ...
]
*/

const logSchema = new Schema({
    time_started: {
        type: Date,
        required: true,
    },
    time_ended: {
        type: Date,
        required: true,
    },
    exercises: {
        type: [Object],
        required: true,
    },
    notes: {
        type: String,
        required: false,
    },
});

logSchema.methods.toJSON = function () {
    return {
        id: this._id.toString(),
        time_started: this.time_started,
        time_ended: this.time_ended,
        exercises: this.exercises,
        notes: this.notes,
    } as LogType;
};


export default mongoose.models.Log || mongoose.model("Log", logSchema);
