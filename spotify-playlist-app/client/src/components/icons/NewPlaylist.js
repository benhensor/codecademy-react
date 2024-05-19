import React from 'react'
import styled from 'styled-components'

export default function NewPlaylist({ onClick }) {
	return (
		<NewPlaylistIcon onClick={onClick}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 18"
				strokeWidth="2"
				stroke="currentColor"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<circle cx="14" cy="17" r="3" />
				<path d="M17 17v-13h4" />
				<path d="M13 5h-10" />
				<line x1="3" y1="9" x2="13" y2="9" />
				<path d="M9 13h-6" />
			</svg>
		</NewPlaylistIcon>
	)
}

const NewPlaylistIcon = styled.button`
	background: none;
	background-color: none;
	color: var(--color-primary);
	width: 4rem;
	height: 4rem;
	border: 3px solid var(--color-primary);
	border-radius: 50%;
	cursor: pointer;
	transition: 0.12s;
	text-shadow: 0 0 0.2rem #000000;
	&:hover {
		color: var(--color-tertiary);
		border: 3px solid var(--color-tertiary);
	}
`
