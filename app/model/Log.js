import mongoose from "mongoose";
const { Schema, model } = mongoose;

const logSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    exercise_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    reps: {        
        type: [Number],
        required: true,        
    },
    notes: {
        type: String,
        required: false,
    },
});

const Log = model("Log", logSchema);
export default Log;
