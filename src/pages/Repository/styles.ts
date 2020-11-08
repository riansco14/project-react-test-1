import styled from 'styled-components'
import { shade } from 'polished'

export const Header = styled.header`
	display: flex;
	width: 700px;
	justify-content: space-between;
	align-items: center;

	a {
		display: flex;

		text-decoration: none;
		color: #a8a8b3;
		transition: color 0.2ms;

		&:hover {
			color: ${shade(0.4, '#a8a8b3')};
			font-weight: bold;
		}

		svg {
			margin-right: 4px;
		}
	}
`
export const RepositoryInfo = styled.header`
	display: flex;
	flex-direction: column;
	max-width: 700px;
	margin-top: 40px;

	header {
		display: flex;
		align-items: center;
		img {
			width: 120px;
			height: 120px;
			border-radius: 50%;
		}

		div {
			margin-left: 20px;
			strong {
				font-size: 36px;
				color: #3d3d4d;
				font-weight: bold;
			}

			p {
				font-size: 18px;
				color: #737380;
				margin-top: 4px;
			}
		}
	}

	ul {
		display: flex;
		list-style: none;
		gap: 80px;
		margin-top: 32px;

		li {
			strong {
				display: block;
				font-size: 28px;
				color: #3d3d4d;
				font-weight: bold;
			}

			p {
				font-size: 18px;
				color: #a8a8a8;
			}
		}
	}
`

export const Repositories = styled.div`
	margin-top: 32px;
	width: 100%;

	a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		border-radius: 6px;
		padding: 24px 16px;
		text-decoration: none;
		transition: transform 0.3s;
		& + a {
			margin-top: 16px;
		}

		&:hover {
			transform: translateX(16px);
		}

		div {
			strong {
				color: #3d3d4d;
			}

			p {
				margin-top: 8px;
				color: #a8a8a8;
			}
		}

		svg {
			width: 32px;
			color: #a8a8a8;
		}
	}
`
