import { sendResponse } from "@bug-busters/utils/send-response";
import type { Request, Response } from "express";
import { ProfileSchema } from "@bug-busters/schemas/profile";
import { ZodError } from "zod";
import { ProfileModel } from "../models/profile.model";
import { MongooseError } from "mongoose";

export const upsertProfile = async (req: Request, res: Response) => {
    try {
        const parsedProfile = ProfileSchema.parse(req.body);

        const updatedProfile = await ProfileModel.findOneAndUpdate(
            { userId: parsedProfile.userId },
            { $set: parsedProfile },
            { new: true, upsert: true }
        );

        sendResponse({
            res,
            statusCode: 200,
            message: "Profile upserted successfully",
            data: updatedProfile,
        });
    } catch (error) {
        if (error instanceof ZodError) {
            sendResponse({
                res,
                statusCode: 400,
                message: error.message,
            });
        }
        else if (error instanceof MongooseError) {
            sendResponse({
                res,
                statusCode: 500,
                message: error.message,
            });
        } else {
            sendResponse({
                res,
                statusCode: 500,
                message: `Internal Server Error: ${error}`,
            });
        }
    }
};
