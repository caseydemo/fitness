import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

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

console.log('models:', models)

const Exercise = models.Exercise ? models.Exercise : model("Exercise", exerciseSchema);
export default Exercise;
