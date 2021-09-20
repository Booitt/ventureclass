import type { GetServerSideProps } from "next"
import type { NextRouter } from "next/router"
import type { Video } from "../types/video"
import type { BackgroundColor } from "../components/Layout"
import React, { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import Head from "next/head"
import classes from "../styles/Treinamento.module.css"
import VideoComponent from "../components/Video"
import Playlist from "./../components/Playlist"

type Props = {
	setBackgroundColor: React.Dispatch<React.SetStateAction<BackgroundColor>>
	videos: Video[]
}

const Treinamento: React.FC<Props> = ({ setBackgroundColor, videos }) => {
	const router = useRouter()
	const { videoId } = router.query
	const [video, setVideo] = useState(
		videos.find((video) => video._id === videoId) || videos[0]
	)

	useEffect(() => {
		if ((!videoId || !videos.some((v) => v._id === videoId)) && video)
			changeUrl(router, video._id)
		setBackgroundColor("light")
	}, [videoId])

	const handleVideoChange = (videoId: string) => {
		setVideo(videos.find((video) => video._id === videoId) as Video)
		changeUrl(router, videoId)
	}

	if (!video) {
		return (
			<div className={classes.missingContent}>
				<p>
					Não há nada por aqui.
					<br />
					<br />
					Certifique-se de que a API está devidamente conectada.
				</p>
			</div>
		)
	}

	return (
		<>
			<Head>
				<title>VentureClass | Treinamento</title>
			</Head>
			<main className={classes.main}>
				<div className={classes.videoContainer}>
					<VideoComponent
						src={video.link}
						title={video.titulo}
						description={video.descricao}
					/>
				</div>
				<div className={classes.playlistContainer}>
					<Playlist
						videos={videos}
						currentVideoId={video._id}
						onVideoChange={handleVideoChange}
					/>
				</div>
			</main>
		</>
	)
}

const changeUrl = (router: NextRouter, videoId: string) => {
	router.push(`/treinamento?videoId=${videoId}`, undefined, {
		shallow: true,
	})
}

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const { data } = await axios.get(process.env.API_BASE_URL! + "/videos")
		return {
			props: { videos: data || [] },
		}
	} catch (err) {
		console.log("Error fetching videos", err)
		return {
			props: { videos: [] },
		}
	}
}

export default Treinamento
