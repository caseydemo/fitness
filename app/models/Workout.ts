import mongoose from "mongoose";
const { Schema } = mongoose;
import { WorkoutType } from "../types";


const workoutSchema = new Schema({
    started: {
        type: Date,
        required: true,
    },
    ended: {
        type: Date,
        required: false,
    },
    exercises: {
        type: [Object],
        required: true,
    },
    workoutId: {
        type: Number,
        required: false,
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
        workoutId: this.workoutId
    } as WorkoutType;
};


export default mongoose.models.Workout || mongoose.model("Workout", workoutSchema);
