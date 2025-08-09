import React from "react";
//import CallIcon from "@mui/icons-material/Call";
//import SearchIcon from "@mui/icons-material/Search";
//import LocalMallIcon from "@mui/icons-material/LocalMall";
import Collection from "./Collection";
import PlayStore from "./PlayStore";
import Footer from "./Footer";
//import { useState } from "react";
//import { Link } from "react-router-dom";
import Header from "./header";

function Navbar() {
    return(
        <div>
            <div><Header/>
                </div>
                <div>
                    <Collection/>
                </div>
                <PlayStore/>
                <Footer/>
        </div>

    );
  
}
export default Navbar;
