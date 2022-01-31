import React, { Component } from "react";
import Productos from "../Components/Productos";
import './Home.css';
import firebase from "../Config/firebase"
import {Card, Container, Spinner} from 'react-bootstrap'
import {Button} from 'react-bootstrap/'
import{Link} from 'react-router-dom'
import NetContext from "../Context/NetContext"

class Home extends Component {
    constructor(){
        super();
        this.state={
            productos:[],
            loading: true
        }
    }

    componentDidMount(){
      /*  fetch("https://jsonfy.com/items")
        .then(res=>res.json())
        .then((data)=>{
            this.setState({
                productos:data,
                loading:false
            })
        })*/
        firebase.db.collection("productos")
        .get()
        .then(querySnapshot=>{
            this.setState({
                productos:querySnapshot.docs,
                loading:false
            })
        })
    }

    render() {
        if(this.state.loading){
            return ( 
            <Container>
                <div style={{position:"fixed", top:"50%", left: "50%"}}>
                    <Spinner animation="grow"/>
                    <Spinner animation="grow"/>
                    <Spinner animation="grow"/>
                </div>
            </Container>
            )
        }else{
            return ( 
            <NetContext.Consumer>
            {
                context=>
                <Container>
                    <br></br>
                    <h1 className="titulo1">Articulos</h1>
                    <br></br>
                    
                    {
                        context.login &&
                        <Card className="altabaja">
                        <Link to={"/ProductoAlta"} ><Button variant="dark" className="bot2"><h5>Dar de Alta</h5></Button></Link>
                        </Card>
                    }
                        
                    
                    <br></br>
                    
                    <div className="body">
                    {this.state.productos.map(producto=><Productos key={producto.id} productos={producto}/>)}
                    </div>
                    
                </Container>
            }
                  
            </NetContext.Consumer>  
                
            )
        }
        
    }
}
export default Home;

