import React from 'react';
import './Product.css'

const Product = (props) => {

    const { name, img, seller, price, ratings } = props.product;

    return (
        <div className='product'>

            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-price">Price : ${price}</p>
                <p className="product-seller">Seller : {seller}</p>
                <p className="product-ratings">Ratings : {ratings}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>



        </div>
    );
};

export default Product;