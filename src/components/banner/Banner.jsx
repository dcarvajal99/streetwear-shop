import { Carousel } from 'react-bootstrap';
import '../../App.css'
function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
      <div className="carousel-image-container">
        <img
          className="d-block w-100 carousel-image"
          src={process.env.PUBLIC_URL + '/src/img/banner.gif'}
          alt="First slide"
        />
        </div>
        <Carousel.Caption className="text-shadow">
          <h1>Streetwear</h1>
          <p>La página de streetwear en Chile</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-image-container">
        <img
          className="d-block w-100 carousel-image"
          src={process.env.PUBLIC_URL + '/src/img/banner-2.jpg'}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption className="text-shadow">
          <h1>Últimas tendencias</h1>
          <p>Encuentra lo último en moda urbana</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className="carousel-image-container">
        <img
          className="d-block w-100 carousel-image"
          src={process.env.PUBLIC_URL + '/src/img/banner-3.jpg'}
          alt="Third slide"
        />
        </div>
        <Carousel.Caption className="text-shadow">
          <h1>Envío gratis</h1>
          <p>En todos los productos</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Banner;