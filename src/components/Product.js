import React from 'react';

function Product(props) {
    return (
        <div>
            <h3>Product: {props.productName.name}</h3>
            <p>Description: {props.productName.description}</p>
        </div>
    )
}

export default Product