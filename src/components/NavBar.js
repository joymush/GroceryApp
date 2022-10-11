import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <NavLink id="nav_items" to="/">
                Home
            </NavLink>
            <NavLink id="nav_items" to="/items">
                Items
            </NavLink>
            <NavLink id="nav_items" to="/itemlist">
                Add Items
            </NavLink>
        </div>
    );
}

export default NavBar;