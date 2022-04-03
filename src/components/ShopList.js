import React, {useEffect, useState} from 'react';
import {API_KEY, API_URL_LIST} from "./config";
import ShopCard from "./ShopCard";
import Preloader from "./preloader";
import Pagination from "./pagination";
import {Button, Form, FormControl} from "react-bootstrap";
import {render} from "@testing-library/react";

const ShopList = (props) => {
    const [items, setItems] = useState([]); // товары магазина
    const [loading, setLoading] = useState(true); // идет загрузка?
    const [value,setValue]=useState('')
    const [itemPage,setItemsPage]=useState(1)
    const [itemsPerPage]=useState(12)

    const filteredItems=items.filter(item=>{
        return item.name.toLowerCase().includes(value.toLowerCase())
    })

    const lastIndexPage=itemPage*itemsPerPage
    const firstIndexPage=lastIndexPage-itemsPerPage
    const itemIndex=filteredItems.slice(firstIndexPage,lastIndexPage)

    const paginate = (pageNumber) => setItemsPage(pageNumber)

    useEffect(() => {
        fetch(API_URL_LIST, {
            headers: {
                Authorization: API_KEY
            }
        })
            .then(response => response.json())
            .then(data => {
                data.items && setItems(data.items.slice(0, 28));
                setLoading(false);
            });
    }, []);

    return (

        <div >

            <Form className="d-flex nav-search mt-2 mb-3" >
                <FormControl
                    style={{color:"#0dcaf0"}}
                    type="search"
                    placeholder="Поиск"
                    className=" nav-place"
                    aria-label="Search"
                    onChange={(event)=>setValue(event.target.value)}
                />

            </Form>
            <div className="cont flex-1">
            {loading ? (
                <Preloader />
            ) : itemIndex.length ? (
                itemIndex.map(item => (
                    <ShopCard  key={item.id} {...item} appendToCart={props.appendToCart} />
                ))
            ) : (
                <p className="text-center fot text-info " >Нет товаров</p>
            )}

            </div>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={filteredItems.length}
                paginate={paginate}

            />
        </div>


    )
};

export default ShopList;