import type { NextPage } from "next"
import type { BackgroundColor } from "../components/Layout"
import React, { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import dogImage from "../public/dog.svg"
import classes from "../styles/Home.module.css"

type Props = {
	setBackgroundColor: React.Dispatch<React.SetStateAction<BackgroundColor>>
}

const Home: NextPage<Props> = ({ setBackgroundColor }) => {
	useEffect(() => {
		setBackgroundColor("blue")
	}, [])
	return (
		<main className={classes.main}>
			<div className={classes.textContainer}>
				<h1 className={classes.title}>
					Educação que
					<br />
					<span>transforma</span>
				</h1>
				<p className={classes.text}>
					Alunos de todo o mundo estão iniciando novas carreiras e avançando em
					suas áreas.
				</p>
				<Link href="/treinamento" passHref>
					<a className={classes.button}>Iniciar treinamento</a>
				</Link>
			</div>
			<div className={classes.imageContainer}>
				<Image src={dogImage} alt="Imagem de um cachorro" />
			</div>
		</main>
	)
}

export default Home
