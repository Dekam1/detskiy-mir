import { useDispatch, useSelector } from 'react-redux';
import { Alert, Snackbar as DefaultSnackbar } from '@mui/material';

import setSnackbarClose from '../../store/actionCreators/setSnackbarClose';

function Snackbar() {
    const { snackbarOpen, snackbarType } = useSelector(state => state.snackbarOptions);
    const dispatch = useDispatch();
    const textAlert = snackbarType === "success"
        ? 'Заказ оформлен. Спасибо за покупку:)'
        : 'Произошла ошибка :('

    function closeSnackbar() {
        dispatch(setSnackbarClose());
    };

    const vertical = 'bottom';
    const horizontal = 'left';

    return (
        <DefaultSnackbar
            open={snackbarOpen}
            onClose={closeSnackbar}
            autoHideDuration={2000}
            anchorOrigin={{ vertical, horizontal }}
        >
            <Alert
                onClose={closeSnackbar}
                severity={snackbarType}
                sx={{ width: '100%' }}
            >
                {textAlert}
            </Alert>
        </DefaultSnackbar >
    );
}

export default Snackbar;