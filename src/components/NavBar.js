import React from "react";

function NavBar() {
    function navigate(e) {
        // don't make a GET request
        e.preventDefault();
        // use pushState to navigate using the href attribute of the <a> tag
        window.history.pushState(null, "", e.target.href);
    }  
}