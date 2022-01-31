import React, {useState, useEffect} from 'react';
import firebase from '../Config/firebase'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'
import{Link} from 'react-router-dom'
import FormGroup from "../Components/Forms/FormGroup"
import AlertCustom from "../Components/AlertCustom"
import "./Login.css"
import {useHistory} from "react-router-dom"

function ProductoEditar(props){
    const history = useHistory();
    const [datos,setDatos] = useState({name:'',price:''});
    const [alert, setAlert] = useState({variant:"", text:""})
    useEffect(
        () => {
            const id = props.match.params.id;
            firebase.db.doc("productos/"+id)
            .get()
            .then(doc=>{
                setDatos( doc.data() )
                console.log(doc.data())
            })
    }, []); 
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name

        setDatos({
            ...datos,
            [name]:value
        })
    }
    const handleSubmit =  (e)=>{
        console.log(datos)
        const id = props.match.params.id;
        firebase.db.doc("productos/"+id)
        .set({
            name:datos.name,
            price:datos.price,
            description:datos.description,
            sku: datos.sku
        },{merge:true})
        .then(doc=>{
            console.log(doc)
            setAlert({variant:"success", text:"Cambio exitoso, por favor espere"})
            function mensaje(){history.push("/");}
            setTimeout(mensaje, 2000);
        })
        e.preventDefault();
    }
    const handleDelete = (e)=>{
        const id = props.match.params.id;
        console.log("Eliminar",id)
        firebase.db.doc("productos/"+id)
        .delete()
        .then(doc=>{
            console.log(doc)
            setAlert({variant:"success", text:"Baja exitosa, por favor espere"})
            function mensaje(){history.push("/");}
            setTimeout(mensaje, 1500);
        })
    }
    return(
        
            <Form  onSubmit={handleSubmit} className="body">
            
            <h1 className="titulo1">Edicion del Producto</h1>
            <br></br>
            <FormGroup label="Nombre" type="text" placeholder="Ingresar Nombre del Producto" name="name" value={datos.name} change={handleChange}/>
            <FormGroup label="Precio" type="number" placeholder="Ingresar Precio" name="price" value={datos.price} change={handleChange}/>
            <FormGroup label="Descripcion" type="text" placeholder="Ingresar Descripcion" name="description" value={datos.description} change={handleChange}/>
            <FormGroup label="SKU" type="number" placeholder="Ingresar SKU" name="sku" value={datos.sku} change={handleChange}/>
            <ButtonGroup className="botones">
                <Button onClick={handleSubmit} variant="primary" className="boton" >Guardar</Button>
                <Link to={"/"} ><Button variant="outline-primary" className="boton">Volver</Button></Link>
                <Button onClick={handleDelete} className="boton" variant="secondary" >Eliminar</Button>
            </ButtonGroup>
            <AlertCustom variant={alert.variant} text={alert.text} />
            
        
        </Form>
    )
}

export default ProductoEditar