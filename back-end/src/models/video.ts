import { Schema, model } from "mongoose"

interface Video {
	titulo: string
	descricao?: string
	link: string
	thumbnail?: string
	duracao: string
}

const schema = new Schema<Video>(
	{
		titulo: { type: String, required: true },
		descricao: { type: String },
		link: { type: String, required: true  },
		thumbnail: { type: String },
		duracao: { type: String, required: true  },
	},
	{ timestamps: true }
)

const VideoModel = model<Video>("Video", schema)

export default VideoModel