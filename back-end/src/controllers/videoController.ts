import type { Request, Response } from "express"
import AppError from "./../utils/AppError"

import Video from "../models/video"

export const getVideos = async (req: Request, res: Response) => {
	const videos = await Video.find({}, {}).select("-__v").exec()
	res.status(200).send(videos)
}

export const postVideos = async (req: Request, res: Response) => {
	if (!req.body) throw new AppError("Invalid parameters", 400)
	const video = new Video(req.body)
	const result = await video.save()
	res.status(200).send(result)
}

export const getVideo = async (req: Request, res: Response) => {
	const { id } = req.params
	const video = await Video.findById(id).select("-__v").exec()
	res.status(200).send(video)
}

export const putVideo = async (req: Request, res: Response) => {
	if (!req.body) throw new AppError("Invalid parameters", 400)
	const { id } = req.params
	const video = await Video.findByIdAndUpdate(id, req.body, {
		new: true,
	})
	res.status(200).send(video)
}

export const deleteVideo = async (req: Request, res: Response) => {
	const { id } = req.params
	const video = await Video.findByIdAndDelete(id)
	res
		.status(200)
		.send({ message: `Video '${video?.titulo}' was successfully deleted!` })
}
