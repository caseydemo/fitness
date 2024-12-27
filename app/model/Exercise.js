import mongoose from "mongoose";
const { Schema, model } = mongoose;

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Exercise = model("Exercise", exerciseSchema);
export default Exercise;
