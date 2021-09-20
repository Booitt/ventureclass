import type { Video } from "../types/video"
import React from "react"
import classes from "./Playlist.module.css"

type Props = {
	videos: Video[]
	onVideoChange: (videoId: string) => void
	currentVideoId: string
}

const Playlist: React.FC<Props> = ({
	videos,
	onVideoChange,
	currentVideoId,
}) => {
	return (
		<div className={classes.container}>
			{videos.map(({ _id, thumbnail, duracao, titulo, descricao }: Video) => (
				<div
					key={_id}
					className={`${classes.item} ${
						currentVideoId === _id && classes.itemActive
					}`}
					onClick={() => onVideoChange(_id)}
				>
					<img
						src={thumbnail}
						alt={`Thumbnail de ${titulo}`}
						className={classes.image}
					/>
					<div className={classes.text}>
						<h2>{titulo}</h2>
						<p>{descricao}</p>
					</div>
					<div className={classes.duracao}>{duracao}</div>
				</div>
			))}
		</div>
	)
}

export default Playlist
