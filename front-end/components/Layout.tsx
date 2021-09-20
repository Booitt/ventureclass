import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/router'
import classes from "./Layout.module.css"
import LogoutIcon from "./UI/LogoutIcon"

export type BackgroundColor = "blue" | "light"

const Layout: React.FC = ({ children }) => {
	const { pathname } = useRouter()
	const [backgroundColor, setBackgroundColor] =
		useState<BackgroundColor>("blue")
	const childrenWithProps = React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { setBackgroundColor })
		}
		return child
	})
	return (
		<>
			<header className={classes.header}>
				<Link href="/">
					<a className={classes.brand}>
						Venture<span>Class</span>
					</a>
				</Link>
				{(pathname !== "/") && <Link href="/">
					<a>
						Sair do app{" "}					
						<span className={classes.logoutIcon}> <LogoutIcon /></span>
					</a>
				</Link>}
			</header>
			<div
				className={`${classes.container} ${
					backgroundColor === "blue" ? classes.blueBackground : ""
				}`}
			>
				{childrenWithProps}
			</div>
		</>
	)
}

export default Layout
