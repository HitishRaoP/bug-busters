import mongoose from 'mongoose';
import { type Profile } from '@bug-busters/types/profile';

const profileSchema = new mongoose.Schema<Profile>(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        timeJoined: {
            type: Number,
            required: true,
        },

        age: {
            type: Number,
            required: true
        },
        profession: {
            type: String,
            required: true
        },
        interests: {
            type: [String],
            required: true
        },
        goals: {
            type: [String],
            required: true
        },
        coins: {
            type: Number,
            required: true,
            default: 0
        },
        level: {
            type: Number,
            required: true
        },
        experiencePoints: {
            type: Number,
            required: true
        },
    }, { _id: false }
);

const ProfileModel = mongoose.model('Profile', profileSchema);

export { ProfileModel };