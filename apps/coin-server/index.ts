import cors from 'cors'
import express, { type Request, type Response } from 'express'
import { COIN_SERVER_CONSTANTS } from './src/constants/coin-server-constants'

const app = express()

async function init() {
	app.use(express.json())
    
	app.use(cors())

	app.get('/', (req: Request, res: Response) => {
		res.json()
	})

	app.listen(COIN_SERVER_CONSTANTS.PORT, () => {
		console.log(`Coin Server Running on http://localhost:${COIN_SERVER_CONSTANTS.PORT}`)
	})
}

init()
