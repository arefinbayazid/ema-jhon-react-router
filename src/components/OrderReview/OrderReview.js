import React from 'react';
import useCart from '../Hooks/UserProduct/useCart';
import useProduct from '../Hooks/UserProduct/useProduct';

const OrderReview = () => {
    const [products] = useProduct();
    const [cart] = useCart(products);
    return (
        <div>
            <h1>{products.length}</h1>
            <h1>{cart.length}</h1>
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;