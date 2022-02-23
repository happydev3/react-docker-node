import {
    FETCH,
    SELECT,
} from '../utils/types'

const initialState = {
    lists: [],
    selected: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type)
    {
        case FETCH:
            return {
                ...state,
                lists: payload,
            }
        case SELECT:
            return {
                ...state,
                selected: payload,
            }
        default:
            return state
    }
 }
