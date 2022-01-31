import React, {useState,useEffect} from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import{Link} from 'react-router-dom'
import firebase from "../Config/firebase"
import "../../src/App.css"
function ProductoDetalle(props) {
    
    const [producto,setProducto] = useState({})

    useEffect(
        ()=>{
            /*fetch("https://jsonfy.com/items/"+ props.match.params.id)
            .then(res=>res.json())
            .then((data)=>{
            setProducto(data[0])
        })*/
        firebase.db.doc("productos/"+ props.match.params.id)
        .get()
        .then(doc=>{
            setProducto(doc.data())
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]
        /*(error)=>{
            <div>
                Error 404
            </div>
        }*/

    )

    return(
        <>
        <Card>
            <Card.Body className="detalle">
                <h5 class="card-title">{producto.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${producto.price}</h6>
                <image></image>
                <p class="card-text">{producto.description}</p>
                <h6 class="card-subtitle mb-2 text-muted">Codigo SKU {producto.sku}</h6>
                <Button variant="primary">Comprar</Button>
                <br></br>
            </Card.Body>
            <Link to={"/"} ><Button variant="secondary">Volver</Button></Link>
        </Card>
        
        </>
    );
    
}
export default ProductoDetalle;