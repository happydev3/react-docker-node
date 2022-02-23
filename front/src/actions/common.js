import {
    STATUS_ERROR,
    STATUS_SUCCESS,
} from '../utils/types';

export const statusUpdate = (status) => (dispatch) => {
    if(status) {
        dispatch({
            type: STATUS_SUCCESS,
        });
    } else {
        dispatch({
            type: STATUS_ERROR,
        });
    }
}