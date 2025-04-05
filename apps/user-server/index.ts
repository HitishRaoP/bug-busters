import "dotenv/config"
import cors from 'cors'
import express, { type Request, type Response } from 'express'
import { USER_SERVER_CONSTANTS } from './src/constants/user-server-constants'
import { sendResponse } from "@bug-busters/utils/send-response"
import ProfileRouter from "./src/routes/profile.route"
import mongoose from "mongoose"

const app = express()

export async function connectDB() {
	try {
		await mongoose.connect(USER_SERVER_CONSTANTS.MONGODB.URI);
		console.log('✅ MongoDB Connected');
	} catch (error) {
		console.error('❌ MongoDB connection error:', error);
		process.exit(1);
	}
}

async function init() {
	app.use(express.json())

	app.use(cors())

	app.get('/', (req: Request, res: Response) => {
		sendResponse({
			res,
			statusCode: 200,
			message: "User Server is up and Running"
		})
	})

	await connectDB();
	
	app.use("/profile", ProfileRouter)

	app.listen(USER_SERVER_CONSTANTS.PORT, () => {
		console.log(`User Server Running on http://localhost:${USER_SERVER_CONSTANTS.PORT}`)
	})
}

init()

export { app }