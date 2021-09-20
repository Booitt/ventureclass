import type { NextFunction, Request, Response } from "express"
import AppError from "./utils/AppError"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import chalk from "chalk"
import morgan from 'morgan'
import db from "./config/db"

import videoRoutes from "./routes/videos"

dotenv.config()
if(!process.env.MONGODB_URI)
	throw new Error(chalk.red("MONGODB_URI is needed in .env file."))
if(!process.env.ORIGIN)
	console.log(chalk.yellow("If you're having problems with CORS, make sure to put a ORIGIN variable in .env file."))

// Initialize
const app = express()
db()

// Config
app.use(cors({
	origin: process.env.ORIGIN,
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Logger
app.use(morgan("tiny"))

// Routes
app.use(videoRoutes)


app.use((req: Request, res: Response) => {
	res.status(404).send({ message: "Route not found" })
})

// Handle errors
app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
	if(err.name === "CastError") err = new AppError("Video not found", 404)
	if(err.name === "ValidationError") err = new AppError("Validation error", 400)
	next(err)
})
app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
	if (err) {
		const { message = "Something went wrong", status = 500 } = err
		res.status(status).send({ message })
		return
	}
	next()
})

// Start server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
	console.log(chalk.green(`Server is running on port ${PORT}`))
})
