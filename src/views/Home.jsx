import { Carousel } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import Banner from '../components/banner/Banner'
import 'bootstrap/dist/css/bootstrap.min.css' 

const Cart = () => {
    return (

        <Container
            className="vh-100 vw-100 mt-4 border-bottom rounded"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
            <Banner/>
            <h1 className="py-4 text-center">Hola CTM</h1>

        </Container>
    );
}

export default Cart;