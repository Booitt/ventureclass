import React from "react"
import classes from "./Video.module.css"

type Props = {
	src: string
	title: string
	description: string
}

const Video: React.FC<Props> = ({ src, title, description }) => {
	return (
		<div className={classes.container}>
			<iframe
				className={classes.video}
				src={src}
				title={title}
				frameBorder="0"
				allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen={true}
			/>
			<div className={classes.text}>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</div>
	)
}

export default Video
