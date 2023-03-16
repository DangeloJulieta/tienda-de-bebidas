
import React from 'react';
import { Link } from "react-router-dom"

export const Logo = ({ nombreLogo }) => {
    return (
        <>
            <Link className="navbar-brand brand-logo logo" to={'/'}>
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/wine-76-162623.png?w=256&f=avif" alt="" width="85" height="85" className="d-inline-block align-text-top" />
                {nombreLogo}
            </Link>
        </>
    );
}