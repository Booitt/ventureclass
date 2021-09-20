import type { Request, Response, NextFunction } from "express"

type AsyncMiddleware = (req: Request, res: Response, next: NextFunction ) => Promise<void>

export default (
	fn: AsyncMiddleware
) => {
	return (req: Request, res: Response, next: NextFunction) => {
		fn(req, res, next).catch((e: Error) => next(e))
	}
}
