import React, { Component } from 'react';

class Category extends Component {
	render() {
		return (
			<div class='list-group'>
				<h3>Category</h3><br/>
				<li class='list-group-item list-group-item-action' >
					Cras justo odio
				</li>
				<li class='list-group-item list-group-item-action'>
					Dapibus ac facilisis in
				</li>
				<li class='list-group-item list-group-item-action'>
					Morbi leo risus
				</li>
				<li class='list-group-item list-group-item-action'>
					Porta ac consectetur ac
				</li>
			</div>
		);
	}
}

export default Category;
