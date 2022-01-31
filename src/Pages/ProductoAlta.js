import React, {useState} from 'react';
import firebase from '../Config/firebase'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form'
import{Link} from 'react-router-dom'
import FormGroup from "../Components/Forms/FormGroup"
import AlertCustom from "../Components/AlertCustom"
import "./Login.css"
import {useHistory} from "react-router-dom"

function ProductoAlta(){
    const [datos,setDatos] = useState({name:'',price:'', description:'', sku:''});
    const [alert, setAlert] = useState({variant:"", text:""})
    const history = useHistory();

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
        firebase.db.collection('productos').add(datos)
        .then(doc=>{
            console.log(doc)
            setAlert({variant:"success", text:"Alta exitosa, por favor espere"})
            function mensaje(){history.push("/");}
            setTimeout(mensaje, 1500);
            
        })
        e.preventDefault();
    }
    return(
        
        <Form  onSubmit={handleSubmit} className="body">
            
            <h1 className="titulo1">Alta del Producto</h1>
            <br></br>
            <FormGroup label="Nombre" type="text" placeholder="Ingresar Nombre del Producto" name="name" value={datos.name} change={handleChange}/>
            <FormGroup label="Precio" type="number" placeholder="Ingresar Precio" name="price" value={datos.price} change={handleChange}/>
            <FormGroup label="Descripcion" type="text" placeholder="Ingresar Descripcion" name="description" value={datos.description} change={handleChange}/>
            <FormGroup label="SKU" type="number" placeholder="Ingresar SKU" name="sku" value={datos.sku} change={handleChange}/>
            <ButtonGroup>
                <Button type="submit" variant="primary" className="boton">Guardar</Button>
                <Link to={"/"} ><Button variant="secondary" className="boton">Volver</Button></Link>
            </ButtonGroup>
            <AlertCustom variant={alert.variant} text={alert.text} />
            
        
        </Form>
            
        
    )
}

export default ProductoAlta