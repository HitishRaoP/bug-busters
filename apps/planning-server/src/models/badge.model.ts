import mongoose from "mongoose";

const BadgeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    earned_date: { type: Date, required: true },
    category: { type: String, required: true, }, // physical, mental, emotional, spiritual
    icon: { type: String, required: false }
}, { _id: false });

export const BadgeModel = mongoose.model("BadgeModel", BadgeSchema)