import React from "react";
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Pagination from "../components/Pagination";

function Main({ pageNumber, totalPages, setPageNumber }) {
    const products = useSelector(state => state.products);
    const loader = useSelector(state => state.isFetching);

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
                    </>}
                </div>
            </main>
            {!loader && <Pagination
                pageNumber={pageNumber}
                totalPages={totalPages}
                setPageNumber={setPageNumber}
            />}
        </>
    )
};

export default Main;