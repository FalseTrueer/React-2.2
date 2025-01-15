import logo from '/logo512.png';
import './App.css';


// Декларативный компонент App(его использование)
export const App = () => {
	// Сам App внутри содержит императивный стиль
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<h2> Year: {new Date().getFullYear()}</h2>
			</header>
		</div>
	);
};
