import React, { Component } from 'react';
import Product from './ProductWithFIlter'


const App = () => {
	return (
		<div className='container my-5'>
			<h1 className="jumbotron text-center">Price Filtering</h1>
			<Product />
			<footer class="footer">
				<div class="container">
					<span class="text-muted">Development Team <a href="https://www.messenger.com/t/3596065630503344" target="hudai">Road To React</a></span>
				</div>
			</footer>
		</div>
	);
}

export default App;
