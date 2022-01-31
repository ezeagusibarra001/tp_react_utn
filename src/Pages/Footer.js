import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class Footer extends Component {
    render() {

        return ( 
            <Card>
            <Card.Header>Contacto</Card.Header>
            <Card.Body>
                <Card.Title>¡Gracias por confiar en nosotros!</Card.Title>
                <Card.Text>
                Ante cualquier inconveniente comunicate a ventas@utnba.com.ar
                </Card.Text>
                <Button variant="primary">Ayuda</Button>
            </Card.Body>
            </Card>
                      
        )
    }
}
export default Footer;