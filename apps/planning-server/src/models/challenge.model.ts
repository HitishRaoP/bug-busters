import mongoose from "mongoose";

/**
 * 41 Day Challenge
 */
const ChallengeSchema = new mongoose.Schema({
    goal: { type: String, required: true },
    progress: { type: Number, default: 0 },
    start_date: { type: Date, required: true },
    current_day: { type: Number, default: 1 },
    completed: { type: Boolean, default: false },
    missed_days: { type: [Date], default: [] },
    difficulty_adjustment: {
        type: Number,
        default: 0
    }
}, { _id: false });

export const ChallengeModel = mongoose.model("ChallengeModel", ChallengeSchema)