import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Pagination from "../components/Pagination";

import getProducts from "../store/actionCreators/getProducts";

function Main() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    const { page } = useSelector(state => state.dataPagination);
    const loader = useSelector(state => state.isFetching);

    React.useEffect(() => {
        dispatch(getProducts(page));
    }, [page, dispatch]);

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    {loader ? <CircularProgress /> : <>
                        <ul className="cards">
                            {products.map(product => (
                                <Card key={product.id} {...product} />
                            ))}
                        </ul>
                        <Pagination />
                    </>}
                </div>
            </main>
        </>
    )
};

export default Main;