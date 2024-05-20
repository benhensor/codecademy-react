import React from 'react'
import styled from 'styled-components'

export default function Closing() {
	return (
		<StyledClosing
			width="45px"
			height="45px"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M10 21C11.1046 21 12 20.1046 12 19V15.3255C12 14.8363 12 14.5917 12.0553 14.3615C12.1043 14.1575 12.1851 13.9624 12.2947 13.7834C12.4184 13.5816 12.5914 13.4086 12.9373 13.0627L14 12L12.9373 10.9373C12.5914 10.5914 12.4184 10.4184 12.2947 10.2166C12.1851 10.0376 12.1043 9.84254 12.0553 9.63846C12 9.40829 12 9.1637 12 8.67452V5C12 3.89543 11.1046 3 10 3"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</StyledClosing>
	)
}

const StyledClosing = styled.svg`
  color: var(--color-primary);
`