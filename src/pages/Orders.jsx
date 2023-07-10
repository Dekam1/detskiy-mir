import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import getOrders from "../utils/getOrders";

import Header from "../components/header/Header";
import Pagination from "../components/Pagination";
import OrderItem from "../components/orderItem/OrderItem";

function Orders() {
    const loader = useSelector(state => state.isFetching);
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();

    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);

    React.useEffect(() => {
        dispatch(getOrders(pageNumber, setTotalPages));
    }, [pageNumber, dispatch]);

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    {loader ? <CircularProgress /> : <>
                        <ul className="orders">
                            {orders.map((order, index) => (
                                <OrderItem key={index} order={order} />
                            ))}
                        </ul>
                    </>}
                </div>
            </main>
            {orders.length && <Pagination
                pageNumber={pageNumber}
                totalPages={totalPages}
                setPageNumber={setPageNumber}
            />}
        </>
    )
};

export default Orders;