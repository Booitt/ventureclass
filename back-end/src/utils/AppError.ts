class AppError extends Error {
	constructor(message: string, public status: number) {
		super()
		this.message = message
		this.status = status
	}
}

export default AppError
