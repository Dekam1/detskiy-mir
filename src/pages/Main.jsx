import React from "react";
import Header from "../containers/header/Header";
import Card from "../containers/card/Card";
import { useDispatch, useSelector } from "react-redux";
import getProducts from "../store/actionCreators/getProducts";

import { Pagination } from '@mui/material';
import setPage from "../store/actionCreators/setPage";

export default function Main() {
    const dispatch = useDispatch();
    const { page, pageQty } = useSelector(state => state.dataPagination);
    const products = useSelector(state => state.products);

    React.useEffect(() => {
        const pageLocal = localStorage.getItem('page') || page;
        dispatch(setPage(pageLocal));
    }, [])

    React.useEffect(() => {
        dispatch(getProducts(page));
        localStorage.setItem('page', page);
    }, [page]);

    console.log(page)

    return (
        <>
            <Header />
            <main className="main">
                <div className="container">
                    <ul className="cards">
                        {products.map(product => (
                            <Card key={product.id} {...product} />
                        ))}
                    </ul>
                    <Pagination
                        color="primary"
                        shape="rounded"
                        size="large"
                        sx={{mt: '24px'}}
                        boundaryCount={2}
                        page={Number(page)}
                        count={Math.floor(pageQty / 20)}
                        onChange={(_, num) => dispatch(setPage(num))}
                    />
                </div>
            </main>
        </>
    )
}