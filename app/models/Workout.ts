import mongoose from "mongoose";
const { Schema } = mongoose;
import { SetType, ExerciseLogType, LogType } from "../types";


const workoutSchema = new Schema({
    started: {
        type: Date,
        required: true,
    },
    ended: {
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

workoutSchema.methods.toJSON = function () {
    return {
        id: this._id.toString(),
        started: this.started,
        ended: this.ended,
        exercises: this.exercises,
        notes: this.notes,
    } as LogType;
};


export default mongoose.models.Workout || mongoose.model("Workout", workoutSchema);
