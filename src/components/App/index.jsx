import React from 'react'
import logo from '../../assets/images/logo.svg'
import style from './index.module.scss'

function App() {
	return (
		<div className={style.App}>
			<header className={style['App-header']}>
				<img src={logo}
					className={style['App-logo']}
					alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className={style['App-link']}
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
