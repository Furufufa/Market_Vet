// src/pages/Products.jsx
import React from 'react';
import { useAppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const productsData = [
    { name: 'Producto A', supply: 'Comida', price: 15, imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Producto B', supply: 'Juguete', price: 25, imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Producto C', supply: 'Accesorio', price: 10, imageUrl: 'https://via.placeholder.com/150' },
    // Agrega más productos aquí
];

const Products = ({ sortType }) => {
    const { addToCart } = useAppContext();

    const sortedProducts = [...productsData].sort((a, b) => {
        if (sortType === 'lowToHigh') {
            return a.price - b.price;
        } else if (sortType === 'highToLow') {
            return b.price - a.price;
        } else if (sortType === 'alphabetical') {
            return a.name.localeCompare(b.name);
        }
        return 0;
    });

    return (
        <div className="container">
        <h2 className="text-center my-4">Productos</h2>
        <div className="row">
            {sortedProducts.map((product) => (
                <div className="col-md-4 mb-4" key={product.id}>
                    <div className="card h-100">
                        <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Suministro: {product.supply}</p>
                            <p className="card-text">Precio: ${product.price}</p>
                            <button
                                className="btn btn-primary w-100"
                                onClick={() => addToCart(product)}
                            >
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
       /* <div className="row">
            {sortedProducts.map((product, index) => (
                <div className="col-md-4 mb-4" key={index}>
                    <div className="card h-100">
                        <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Suministro: {product.supply}</p>
                            <p className="card-text">Precio: ${product.price}</p>
                            <button className="btn btn-primary">Comprar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div> */
    );
};

export default Products;

