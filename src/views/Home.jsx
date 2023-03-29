import { Container } from "react-bootstrap";
import Banner from '../components/banner/Banner'
import 'bootstrap/dist/css/bootstrap.min.css' 
import CardsProducts from '../components/cards/CardsProducts';
import CarouselFade from "../components/carousel/CarouselFade";
/* import ModalApp from "../components/modal/modal";
 */
const Home = () => {

    return (
        <>
        <Container
            className=" vw-100 mt-4 border-bottom rounded"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
            <Banner/>
            <h1 className="py-4 text-center">hola</h1>
            <CardsProducts/>
            <CarouselFade/>
        </Container>
        </>
    );
}

export default Home;