import React from "react";
import {Link} from "react-router-dom"

function OptionMenu(props) {
    return (     
         <Link to={props.opcion.path} key={props.opcion.label} id="link"><li id="li">{props.opcion.label}</li></Link>    
    )
}
export default OptionMenu;