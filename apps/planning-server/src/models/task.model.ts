import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
    date: { type: Date, required: true }
}, { _id: false });

export const TaskModel = mongoose.model("TaskModel", TaskSchema);