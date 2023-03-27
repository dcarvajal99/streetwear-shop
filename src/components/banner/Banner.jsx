import 'bootstrap/dist/css/bootstrap.min.css' 

function Banner() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src='/public/src/img/banner.png' className="d-block w-100" alt="Streetwear" />
          <div className="carousel-caption d-none d-md-block">
            <h3>Streetwear</h3>
            <p>La página de streetwear en Chile</p>
          </div>
        </div>
      </div>
    </div>
  );
  }
export default Banner;