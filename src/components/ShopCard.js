import React from 'react';
import {Button, Card} from "react-bootstrap";

const ShopCard = (props) => {
    const {
        id,
        name,
        price,
        images,
        description,
        appendToCart
    } = props;
    const item = {id: id, name: name, price: price}
    return (
        <Card className="about m-1"
            id={"product-" + id}
            style={{ }}>
            <Card.Img className="border-info" variant="top" src={images.icon} alt="" />
            <Card.Body className="card_body">
                <Card.Title className="text-info">{name}</Card.Title>
                <Card.Text className="text-info">
                    {description}
                </Card.Text>
                <div className="card_txt">
                    <Card.Text className="text-info">
                        Цена: {price} руб.
                    </Card.Text>
                    <div className="btn-l-k">
                        <Button
                            onClick={() => appendToCart(item, 1)}
                            variant="outline-info"
                        >Купить
                        </Button>
                        <Button variant="outline-info" >Больше</Button>
                    </div>
                </div>

            </Card.Body>
        </Card>

    );
};

export default ShopCard;