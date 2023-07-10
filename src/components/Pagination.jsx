import React from "react";
import { Pagination as DefaultPagination } from '@mui/material';

function Pagination({ pageNumber, totalPages, setPageNumber }) {
    return (
        <DefaultPagination
            color="primary"
            shape="rounded"
            size="large"
            sx={{ mt: '24px' }}
            boundaryCount={2}
            page={Number(pageNumber)}
            count={totalPages}
            onChange={(_, num) => setPageNumber(num)}
        />
    )
};

export default Pagination;