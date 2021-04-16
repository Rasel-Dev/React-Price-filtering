import React from 'react'

const Product = ({key, name, ico, price}) => {
    return (
        <div className="col-md-3 card m-4 shadow text-center" key={key}>
            <img className="card-img-top" src={ico} alt={name} />
            <div className="card-body">
                <h1 className="card-title">${price}</h1>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Lorem ipsum dolor sit consectetur</p>
                <a href="#" className="btn btn-warning shadow">Order Now +</a>
            </div>
        </div>
    )
 }

export default Product;