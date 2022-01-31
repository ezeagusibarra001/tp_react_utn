import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import OptionMenu from "./OptionMenu"
import "../../Pages/Menu.css"
import NetContext from "../../Context/NetContext"


function Menu (props) {

    return ( 
        <NetContext.Consumer>
            {
                context=>
            <div id="menu">
                <Navbar bg="light" expand="lg">
                <Navbar.Brand>E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <OptionMenu opcion={{label: "Inicio", path: "/"}}/>
                    {
                        context.login &&
                        <>
                        <Nav.Link onClick={context.logoutUser}>Salir</Nav.Link>
                        </>
                    }
                    {
                        !context.login &&
                        <>
                        <OptionMenu opcion={{label: "Registro", path: "/Registro"}}/>
                        <OptionMenu opcion={{label: "Ingresar", path: "/Login"}}/>
                        </>
                    }
                </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div> 
            }
                  
        </NetContext.Consumer>   
    )
}
export default Menu;