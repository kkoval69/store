import React from 'react';

const CartIcon = (props) => {
    return (
        <div className="cart-icon " onClick={props.toggleShow}>
            <i className="bi bi-cart3 basket"></i>

            {props.length ? <span style={{fontSize:'18px'}}>{props.length}</span> : null}
        </div>
    );
};

export default CartIcon;