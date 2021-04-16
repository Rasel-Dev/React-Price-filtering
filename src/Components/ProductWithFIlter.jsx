import React, { Component } from 'react';
import {productStore} from '../Store/Products';
import Category from './Category'
import Product from './Product';


class productCom extends Component {
	state = {
		minPriceRange: 0,
		maxPriceRange: 2000,
	};

	minRangeChange = (event) => {
		this.setState({
			minPriceRange: event.target.value,
		});
	};
	maxRangeChange = (event) => {
		this.setState({
			maxPriceRange: event.target.value,
		});
	};

	render() {
		const { minPriceRange, maxPriceRange } = this.state;

		const products = productStore.map((product) => {
			if (minPriceRange === 0 && maxPriceRange === 2000) {
				return <Product key={product.id.toString()} name={ product.name} ico={product.ico} price={product.price} />;
			} else {
				if (
					minPriceRange <= product.price &&
					maxPriceRange >= product.price
				) {
					return <Product key={product.id.toString()} name={ product.name} ico={product.ico} price={product.price} />;
				}
			}
		});

		return (
			<div className="row">
				<div className="col-md-3">
					<div className='row'>
						<div className='col-12'>
							<label>Minimum Price</label>
							<div className="row">
								<input
									type='range'
									max='2000'
									min='10'
									step='10'
									className='col-8 form-control'
									value={minPriceRange}
									onChange={(event) => this.minRangeChange(event)}
								/>
								<div className="col-2">
									<span className='badge badge-success'>
										Min: $ {minPriceRange}
									</span>
								</div>
							</div>
						</div>
						<div className='col-12'>
							<label>Maximum Price</label>
							<div className="row">
								<input
									type='range'
									max='2000'
									min='10'
									step='10'
									className='col-8 form-control'
									value={maxPriceRange}
									onChange={(event) => this.maxRangeChange(event)}
								/>
								<div className="col-2">
									<span className='badge badge-success'>
										Max: $ {maxPriceRange}
									</span>
								</div>
							</div>
						</div>
					</div><br/><hr/>
					<Category />
				</div>
				<div className="col-md-9">
					<div className='row mt-5'>{products}</div>
				</div>
			</div>
		);
	}
}

export default productCom;
