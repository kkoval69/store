import React from 'react';

const CartItem = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td >{props.quantity}</td>
            <td>{props.price}</td>
            <td>{props.price * props.quantity}</td>
            <td>
                <i
                    className="delTov bi bi-x-circle "
                    style={{cursor:"pointer"}}
                    onClick={() => props.removeFromCart(props.id)}
                >
                </i>
            </td>
        </tr>
    );
};

export default CartItem;