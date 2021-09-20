import mongoose from "mongoose"
import chalk from "chalk"

export default () => {
	mongoose
		.connect(process.env.MONGODB_URI!)
		.then(() => {
			console.log(chalk.green("DB connected!"))
		})
		.catch((err) => {
			console.log(chalk.red("Cannot connect to the database!"), err)
			process.exit()
		})
}
