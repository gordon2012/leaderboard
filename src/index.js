import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

let store = createStore((state) => {return state}, [])

render(
	<Provider store={store}>
		<div>
			<h1>Camper Leaderboard</h1>
			<p>Top 100 campers sorted by brownie points</p>
		</div>
	</Provider>,
	document.getElementById('root')
);
