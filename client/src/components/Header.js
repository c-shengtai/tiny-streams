import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => (
    <div className="ui secondary pointing menu">
        <Link to="/" className="item">
            Tiny-Stream
        </Link>
        <div className="right menu">
            <Link className="item" to="/">
                All streams
            </Link>
            <GoogleAuth />
        </div>
    </div>
);

export default Header;
