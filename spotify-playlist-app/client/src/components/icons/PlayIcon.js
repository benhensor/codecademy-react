import React from 'react'
import { PlayerButton } from './Styles'

export default function PlayIcon({ onClick }) {
	return (
		<PlayerButton onClick={onClick}>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 95 95"
				fill="currentColor"
			>
				<path
					d="M63.3 45L40.2 29.6C38.2 28.3 35.6 29.7 35.6 32.1V62.9C35.6 65.3 38.3 66.7 40.2 65.4L63.3 50C65.1 48.8 65.1 46.2 63.3 45Z"
					fill="currentColor"
				/>
				<path
					d="M47.5 0C21.3 0 0 21.3 0 47.5C0 73.7 21.3 95 47.5 95C73.7 95 95 73.7 95 47.5C95 21.3 73.7 0 47.5 0ZM47.5 87.6C25.4 87.6 7.4 69.6 7.4 47.5C7.4 25.4 25.4 7.4 47.5 7.4C69.6 7.4 87.6 25.4 87.6 47.5C87.6 69.6 69.6 87.6 47.5 87.6Z"
					fill="currentColor"
				/>
			</svg>
		</PlayerButton>
	)
}
