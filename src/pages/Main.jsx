import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Pagination from "../components/Pagination";

import getProducts from "../utils/getProducts";


function Main() {
    const products = useSelector(state => state.products);
    const loader = useSelector(state => state.isFetching);
    const dispatch = useDispatch();

    const [pageNumber, setPageNumber] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);

    React.useEffect(() => {
        dispatch(getProducts(pageNumber, setTotalPages));
    }, [pageNumber, dispatch]);

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