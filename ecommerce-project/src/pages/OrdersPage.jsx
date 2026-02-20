import "./OrdersPage.css";
import { Header } from "../components/Header/Header";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { OrdersGrid } from "../components/orders/OrdersGrid";

export function OrdersPage({ cart }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setOrders(response.data);
            })
    }, [])
    return (
        <>
            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrdersGrid orders={orders} />
                
            </div>
        </>
    );
}