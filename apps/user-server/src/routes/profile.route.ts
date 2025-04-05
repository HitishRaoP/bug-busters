import express from "express";
import { upsertProfile } from "../controllers/profile.controller";

const ProfileRouter = express.Router()

ProfileRouter.post("/", upsertProfile)

export default ProfileRouter;