import express from "express"
import wrapAsync from "../utils/wrapAsync"
import {
	getVideos,
	postVideos,
	getVideo,
	putVideo,
	deleteVideo,
} from "../controllers/videoController"

const router = express.Router()

router.route("/videos")
    .get(wrapAsync(getVideos))
    .post(wrapAsync(postVideos))

router
	.route("/video/:id")
	.get(wrapAsync(getVideo))
	.put(wrapAsync(putVideo))
	.delete(wrapAsync(deleteVideo))

export default router
