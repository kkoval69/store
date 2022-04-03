import React from 'react';
import CartItem from "./CartItem";
import {Table} from "react-bootstrap";

const CartList = (props) => {

    const cost = props.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return (
        <div className="cart-modal">
            <i className="cart-modal-close bi bi-x-lg m-lg-2 delTov" onClick={props.toggleShow}> </i>
            <h5 className="text-center text-info">Ваша корзина</h5>

            {props.items.length ? (
                <Table  variant="dark" >
                    <thead >
                    <tr >
                        <th>Наименование</th>
                        <th>Количество</th>
                        <th>Цена</th>
                        <th>Сумма</th>
                        <th>Удалить</th>
                    </tr>
                    </thead>
                    <tbody  >
                    {props.items.map(item =>
                        <CartItem key={item.id} {...item} removeFromCart={props.removeFromCart} />
                    )}
                    <tr>
                        <th colSpan="3">Итого</th>
                        <th>{cost}</th>
                        <th>руб.</th>
                    </tr>
                    </tbody>
                </Table>
            ) : (
                <p className="text-info text-center">Пусто</p>
            )}
        </div>
    );
};

export default CartList;