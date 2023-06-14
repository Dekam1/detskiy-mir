import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

import Header from "../containers/header/Header";
import Card from "../containers/card/Card";
import Pagination from "../containers/Pagination";

import getProducts from "../store/actionCreators/getProducts";

export default function Main() {
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
}