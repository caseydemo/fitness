import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    is_admin: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const User = model("User", userSchema);
export default User;
