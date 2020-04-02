import { combineReducers } from "redux";
import auth from "./authReducer";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";

export default combineReducers({
    auth,
    form: formReducer,
    streams: streamReducer
});
