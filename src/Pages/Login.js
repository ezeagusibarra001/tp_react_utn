import Form from 'react-bootstrap/Form'
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import "./Login.css"
import { useState, useContext } from 'react'
import {useHistory} from "react-router-dom"
import firebase from "../Config/firebase"
import FormGroup from "../Components/Forms/FormGroup"
import AlertCustom from "../Components/AlertCustom"
import NetContext from "../Context/NetContext"

function Login()  {
        const context = useContext(NetContext)
        const [form, setForm] = useState({email:'', password:''});
        const [spinner, setSpinner] = useState(false);
        const [alert, setAlert] = useState({variant:"", text:""})
        const history = useHistory();
        const handleSubmit = (e)=>{
        e.preventDefault();
        setSpinner(true);
        let email=form.email;
        let password=form.password;
        firebase.auth.signInWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario logueado", data)
            setSpinner(false);
            context.loginUser();
            setAlert({variant:"success", text:"Bienvenido/a, por favor espere"})
            function mensaje(){history.push("/");}
            setTimeout(mensaje, 3500);
            
        })
        .catch((error)=>{
            console.log("Error", error)
            setSpinner(false);
            setAlert({variant:"danger", text:"Ha ocurrido un error"})
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
            
            <h1 className="titulo1">Login</h1>
            <br></br>
            <FormGroup label="Email" type="email" placeholder="Ingresar Email" name="email" value={form.email} change={handleChange}/>
            <FormGroup label="Contraseña" type="password" placeholder="Ingresar Contraseña" name="password" value={form.password} change={handleChange}/>
            <ButtonWithLoading text="Login" loading={spinner}/>

            <AlertCustom variant={alert.variant} text={alert.text} />
        </Form>
    )
    
}
export default Login;
