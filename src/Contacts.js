import React from "react";
import {NavLink} from "react-router-dom";
import Yandex_map from "./Yandex_map";

function Contacts(){
    return <div className="home">
        <h1>Cover yor</h1>
        <h3>
            Cover is a one-page template for building simple and beautiful home pages.
            Download, edit the text, ur own.
        </h3>
        <div className="cont_button">
            <div className="button_1">
                <button>
                  <a className="cont_butt" href="Yandex_map">yandex</a>
                </button>
            </div>
            <div className="button_1">
                <button>
                 <a className="cont_butt" href="https://www.google.com/maps/d/edit?mid=1kQttbv6mwUW34sPGAdDbcsk8XIYNNaxj&usp=sharing">Google</a>
                </button>
            </div>
        </div>
    </div>
}
export default Contacts;