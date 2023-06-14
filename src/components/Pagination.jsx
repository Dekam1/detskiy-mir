import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination as DefaultPagination } from '@mui/material';

import setPage from "../store/actionCreators/setPage";

function Pagination() {
    const dispatch = useDispatch();
    const { page, pageQty } = useSelector(state => state.dataPagination);

    return (
        <DefaultPagination
            color="primary"
            shape="rounded"
            size="large"
            sx={{ mt: '24px' }}
            boundaryCount={2}
            page={Number(page)}
            count={Math.floor(pageQty / 20)}
            onChange={(_, num) => dispatch(setPage(num))}
        />
    )
};

export default Pagination;