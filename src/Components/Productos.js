import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import{Link} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import NetContext from "../Context/NetContext"

function Productos(props){
    return(
        <NetContext.Consumer>
        {
            context=>
            <Card>
                <Card.Body>
                    <Card.Title><div>{props.productos.data().name}</div></Card.Title>
                    <h4>
                        <div>${props.productos.data().price}</div> <Badge variant="secondary">Buy Now</Badge>
                    </h4>    
                    <Link to={"/Productos/"+ props.productos.id} ><Button variant="primary" className="bot">Ver</Button></Link>
                    {
                        context.login   &&
                    <Link to={"/ProductoEditar/"+ props.productos.id} ><Button variant="secondary" className="bot">Editar</Button></Link>
                    }
                    
                </Card.Body>
            </Card>
        }
                  
        </NetContext.Consumer>  
    );
}

export default Productos;
