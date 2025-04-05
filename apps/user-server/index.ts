import "dotenv/config"
import cors from 'cors'
import express, { type Request, type Response } from 'express'
import { USER_SERVER_CONSTANTS } from './src/constants/user-server-constants'
import { sendResponse } from "@bug-busters/utils/send-response"

const app = express()

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

	app.listen(USER_SERVER_CONSTANTS.PORT, () => {
		console.log(`User Server Running on http://localhost:${USER_SERVER_CONSTANTS.PORT}`)
	})
}

init()

export { app }