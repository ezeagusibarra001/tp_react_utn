import Form from 'react-bootstrap/Form'
import "./Registro.css"
import { useState } from 'react'
import firebase from "../Config/firebase"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import FormGroup from "../Components/Forms/FormGroup"
import AlertCustom from "../Components/AlertCustom"
import {useHistory} from "react-router-dom"

function Registro()  {
        const [form, setForm] = useState({email:'', password:'', address:'', city:'', provincia:'', cp:''});
        const [spinner, setSpinner] = useState(false);
        const history = useHistory();
        const [alert, setAlert] = useState({variant:"", text:""})
        const handleSubmit = (e)=>{
        e.preventDefault();
        setSpinner(true);
        let email=form.email;
        let password=form.password;
        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario creado", data.user.uid)
            setAlert({variant:"success", text:"Usuario Creado, por favor espere"})
            function mensaje(){history.push("/Login");}
            setTimeout(mensaje, 3500);
            firebase.db.collection("usuarios").add({
                nombre: form.name,
                apellido: form.lastname,
                email: form.email,
                password: form.password,
                userId: data.user.uid
            })
            .then((data)=>{
                setSpinner(false);
                console.log(data)
            })
            .catch((err)=>{
                console.log(err)
                setSpinner(false);
            })
        })
        .catch((error)=>{
            console.log("Error", error)
            setAlert({variant:"danger", text:"Ha ocurrido un error"})
            setSpinner(false);
        })
        

    }
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        setForm({
            ...form,
            [name] : value});
    }

    return ( 
        
        <Form className="body" onSubmit={handleSubmit}>
            <h1 className="titulo1">Registro</h1>
            <br></br>
            <FormGroup label="Nombre" type="text" placeholder="Ingresar Nombre" name="name" value={form.name} change={handleChange}/>
            <FormGroup label="Apellido" type="text" placeholder="Ingresar Apellido" name="lastname" value={form.lastname} change={handleChange}/>
            <FormGroup label="Email" type="email" placeholder="Ingresar Email" name="email" value={form.email} change={handleChange}/>
            <FormGroup label="Contraseña" type="password" placeholder="Ingresar Contraseña" name="password" value={form.password} change={handleChange}/>
                                    
                <ButtonWithLoading text="Registrarse" loading={spinner}/>
                
                <AlertCustom variant={alert.variant} text={alert.text} />

            </Form>
        )
    
}
export default Registro;
