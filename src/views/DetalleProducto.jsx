import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import Context from "../context/ContextProvider";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import CarouselFade from "../components/carousel/CarouselFade";
const DetalleProducto = () => {

    const { id } = useParams();
    const { productoSeleccionado, añadirAlCarrito} = useContext(Context);
    const producto = productoSeleccionado(id)
    return (
        <>
            <Container
                className="fluid  vw-100 mt-4 border-bottom rounded"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
                
                <Row >
                    <Col style={{}}>
                    <img src={producto.foto} 
                                className="card-img-top" 
                                alt={producto.nombre} 
                                />
                    </Col>
                    <Col >
                    
                        <Row className='mt-3'>
                            <h2><strong>{producto.nombre}</strong></h2>
                        </Row>
                        <Row >
                            <p>{producto.descripcion}</p>
                        </Row>
                        <Row className="">
                            <h3>${producto.precio}</h3>
                        </Row>
                        <Row className="">
                            <h5>Tallas Disponibles:</h5>
                            {producto.tallas.map((tallaObj, index) => (
                                <button type="button" key={index} className="btn btn-dark" onClick={() => añadirAlCarrito(producto.id,tallaObj.talla)}>{(tallaObj.talla.length>3) ? tallaObj.talla.substring(3) : tallaObj.talla}</button>
                                ))}
                        </Row>
                        
                        

                    
                    </Col>
                </Row>
                <Row >
                <CarouselFade/>
                </Row>
            
        </Container>
        </>
    );
}

export default DetalleProducto;