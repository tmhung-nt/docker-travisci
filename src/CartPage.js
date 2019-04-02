import React from 'react';
import PropTypes from 'prop-types';
import './CartPage.css';
import Item from './Item';
import { calculateTotalAmount, calculateTotalProducts } from './utils';



const ShowProductsInCart = ({items, onAddOne, onRemoveOne}) => {
    return (
        <ul className="CartPage-items" >
        {items.map(item => 
            <li key={item.id} className="CartPage-item" >
                <Item item={item} >
                    <div className="CartItem-controls">
                        <button className="CartItem-removeOne"
                            onClick={() => onRemoveOne(item)}>
                            &ndash;
                        </button>
                        <span className="CartItem-count">
                            {item.count}
                        </span>
                        <button className="CartItem-addOne"
                            onClick={() => onAddOne(item)}>
                            +
                        </button>
                    </div>
                </Item>
            </li>
        )}
        <li className="CartPage-item CartPage-total">
            Total: ${calculateTotalAmount(items).toFixed(2)}
        </li>
    </ul>
    )
}

const ShowEmptyMessage = () => {
    return (
        <div className="CartPage-emptyMessage">
            <p>Your cart is empty.</p>
            <p>Why not add some expensive products to it?</p>
        </div>
    );
}

const CartPage = ({items, onAddOne, onRemoveOne}) => {
    const totalProduct = calculateTotalProducts(items);
    const props = {
        items,
        onAddOne,
        onRemoveOne
    }
    return (
        totalProduct !== 0 
            ? <ShowProductsInCart {...props}/>
            : <ShowEmptyMessage />
        
    )
}

CartPage.prototype = {
    items: PropTypes.object.isRequired
}

export default CartPage;