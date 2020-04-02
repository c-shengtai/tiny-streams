import {
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM,
    CREATE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
            return action.payload.reduce((acc, stream) => {
                return { ...acc, [stream.id]: stream };
            }, {});
        case FETCH_STREAM:
        case EDIT_STREAM:
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            const { [action.payload.id]: stream, ...newState } = state;
            return { ...newState };
        default:
            return state;
    }
};
