import { FETCH, SELECT, STATUS_ERROR } from '../utils/types'
import axios from 'axios'

const PREFIX_API_URL = 'http://localhost:8000'

export const getPhones = () => async (dispatch) => {
    try {
        dispatch({ type: 'LOADING', payload: true })
        const res = await axios.get(`${PREFIX_API_URL}/phones`)
        dispatch({
            type: FETCH,
            payload: res.data.response,
        });
    } catch (err) {
        console.log(err.response.statusText)
        dispatch({
            type: STATUS_ERROR,
            payload: err.response.statusText,
        });
    } finally {
        dispatch({ type: 'LOADING', payload: false })
    }
}

export const selectPhone = (phone) => (dispatch) => {
    dispatch({ type: SELECT, payload: phone })
}