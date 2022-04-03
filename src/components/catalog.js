import React, {useState} from 'react';
import CartIcon from "./Basket/CartIcon";
import ShopList from "./ShopList";
import CartList from "./Basket/CartList";

const Catalog = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartShow, setCartShow] = useState(false); // модальное окно


    const appendToCart = (item, quantity = 1) => {
        // нужно проверить, нет ли уже такого товара в корзине
        const itemIndex = cartItems.findIndex(value => value.id === item.id);
        if (itemIndex < 0) { // такого товара еще нет
            const newItem = {
                ...item,
                quantity: quantity
            };
            setCartItems([...cartItems, newItem]);
        } else { // такой товар уже есть
            const newItem = {
                ...cartItems[itemIndex],
                quantity: cartItems[itemIndex].quantity + quantity
            };
            const newCart = cartItems.slice(); // копия массива cartItems
            newCart.splice(itemIndex, 1, newItem);
            setCartItems(newCart);
        }
    };

    const removeFromCart = (id) => {
        const newCart = cartItems.filter(item => item.id !== id);
        setCartItems(newCart);
    }

    const toggleShow = () => setCartShow(!cartShow);


    return (
        <main className="container">
            <CartIcon length={cartItems.length} toggleShow={toggleShow} />
            <ShopList appendToCart={appendToCart} />
            {cartShow ? (
                <CartList items={cartItems} toggleShow={toggleShow} removeFromCart={removeFromCart} />
            ) : (
                null
            )}
        </main>
    );
};

export default Catalog;