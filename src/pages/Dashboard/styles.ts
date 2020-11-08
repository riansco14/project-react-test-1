import styled, { css } from 'styled-components'
import polished, { lighten, shade } from 'polished'

interface FormProps {
	hasError: boolean
}

export const Title = styled.h1`
	font-size: 48px;
	color: #3a3a3a;
	max-width: 450px;
	line-height: 56px;

	margin-top: 80px;
`
export const Form = styled.form<FormProps>`
	margin-top: 40px;
	max-width: 700px;
	display: flex;

	input {
		flex: 1;
		height: 70px;
		padding: 0 24px;
		color: #3a3a3a;
		border: 0;
		border-radius: 5px 0 0 5px;
		border: white 2px solid;
		${(props) =>
			props.hasError &&
			css`
				border-color: #c53030;
			`}

		&::placeholder {
			color: #a8a8b3;
		}
	}

	button {
		width: 210px;
		height: 70px;
		border: none;
		background: #04d361;
		color: white;
		border-radius: 0 5px 5px 0;
		transition: background-color 0.2s;

		&:hover {
			background: ${shade(0.2, '#04d361')};
		}
	}
`
export const Repositories = styled.div`
	max-width: 700px;
	margin-top: 60px;
	a {
		background-color: white;
		display: flex;
		border-radius: 6px;
		padding: 24px;
		flex-direction: row;
		text-decoration: none;
		align-items: center;

		transition: transform 0.2s;
		&:hover {
			transform: translateX(10px);
		}

		& + a {
			margin-top: 16px;
		}

		img {
			width: 64px;
			width: 64px;
			border-radius: 50%;
		}
		div {
			margin: 0 16px;
			flex: 1;
			strong {
				font-size: 20px;
				color: #3a3a3a;
			}
			p {
				font-size: 18px;
				color: ${lighten(0.3, '#3a3a3a')};
				margin-top: 4px;
			}
		}
		svg {
			margin-left: auto;
			color: #cbcbd6;
		}
	}
`
export const Error = styled.span`
	display: block;
	color: #c53030;
	margin-top: 8px;
`
