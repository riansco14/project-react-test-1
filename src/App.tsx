import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './routes'

import GlobalStyle from './styles/global'

const App: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
			<GlobalStyle />
		</>
	)
}

export default App
