import "dotenv/config"
import cors from 'cors'
import express, { type Request, type Response } from 'express'
import { COIN_SERVER_CONSTANTS } from './src/constants/coin-server-constants'
import { sendResponse } from "@bug-busters/utils/send-response"

const app = express()

async function init() {
	app.use(express.json())

	app.use(cors())

	app.get('/', (req: Request, res: Response) => {
		sendResponse({
			res,
			statusCode: 200,
			message: "Coin Server is up and Running"
		})
	})

	app.listen(COIN_SERVER_CONSTANTS.PORT, () => {
		console.log(`Coin Server Running on http://localhost:${COIN_SERVER_CONSTANTS.PORT}`)
	})
}

init()

export { app }