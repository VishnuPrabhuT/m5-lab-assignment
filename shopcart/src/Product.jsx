import React, { useState } from "react";
import "./Product.sass";

function Product(props) {
    return (
        <div className="product">
            <div className="left">
                <h5>{props.title}</h5>
                <img src={props.url} alt={props.title} />
            </div>
            <div className="right">
                <input
                    id="quantity"
                    type="number"
                    onChange={(e) =>
                        props.changeQuantity(props.id, e.target.value)
                    }
                />
                <label htmlFor="quantity">quantity</label>
            </div>
        </div>
    );
}

export default Product;
