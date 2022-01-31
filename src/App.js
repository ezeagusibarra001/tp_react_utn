import Home from "./Pages/Home"
import Menu from "./Components/Menu/index"
import Footer from "./Pages/Footer"
import Registro from "./Pages/Registro"
import Login from "./Pages/Login"
import {BrowserRouter,Route} from "react-router-dom"
import ProductoDetalle from "./Components/ProductoDetalle"
import ProductoAlta from "./Pages/ProductoAlta"
import ProductoEditar from "./Pages/ProductoEditar"
import GlobalState from "./Context/GlobalState"

function App(){
    
    const opciones = [
        {
            path:"/",
            label: "Home"
        },
        {
            path:"/Registro",
            label: "Registro"
        },
        {
            path:"/Login",
            label: "Login"
        }
    ];
    
    return(
        <GlobalState>
            <BrowserRouter>
                <Menu data={opciones}/>
                <Route path="/" exact component={Home}/>
                <Route path="/Registro" exact component={Registro}/>
                <Route path="/Login" exact component={Login}/>
                <Route path="/Productos/:id" exact component={ProductoDetalle}/>
                <Route path="/ProductoAlta" exact component={ProductoAlta}/>
                <Route path="/ProductoEditar/:id" exact component={ProductoEditar}/>
                <Footer/>
            </BrowserRouter>
        </GlobalState>
    )
}
export default App;