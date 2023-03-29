import Carousel from 'react-bootstrap/Carousel';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';
import '../../App.css'
function CarouselFade() {
  const {productos} = useContext(Context);
  
  return (
    <Carousel fade className="custom-carousel" >
    {productos.map((product) => (
      <Carousel.Item key={product.id} >
        <img src={process.env.PUBLIC_URL + product.foto} 
        className="d-block w-100 carousel-image2"
        style={{ maxHeight: "500px", objectFit: "cover", top: "70px"  }}
        alt={product.nombre} 
        />
        <Carousel.Caption>
          <h3>{product.nombre}</h3>
          <h5>${product.precio}</h5>
          <p>{product.descripcion.slice(0, 50)}...</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
    </Carousel>
  );
}

export default CarouselFade;