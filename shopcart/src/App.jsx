import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Product from "./Product";

import "./App.sass";

function App() {
    let prods = [
        {
            id: 1,
            image: "/products/cologne.jpg",
            desc: "Unisex Cologne",
            value: 0,
        },
        {
            id: 2,
            image: "/products/iwatch.jpg",
            desc: "Apple iWatch",
            value: 0,
        },
        { id: 3, image: "/products/mug.jpg", desc: "Unique Mug", value: 0 },
        {
            id: 4,
            image: "/products/wallet.jpg",
            desc: "Mens Wallet",
            value: 0,
        },
    ];

    const [cartCount, setCartCount] = useState(0);
    const [products, setProducts] = useState(prods);

    function changeQuantity(id, quantity) {
        let p = products;
        p.filter((product) => product.id == id)[0].value = Number(quantity);
        setProducts(p);
        let sum = p.reduce((s, product) => {
            return product.value + s;
        }, 0);

        setCartCount(sum);
    }

    return (
        <div className="shop-cart">
            <header>
                <h2>Shop to React</h2>
                <span>
                    <FontAwesomeIcon icon={faShoppingCart} /> {cartCount} items
                </span>
            </header>
            {products.map((product) => {
                return (
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.desc}
                        url={product.image}
                        changeQuantity={changeQuantity}
                    ></Product>
                );
            })}
        </div>
    );
}

export default App;
