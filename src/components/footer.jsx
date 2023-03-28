import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Todos los derechos reservados © 2023 Streetwear</p>
          </div>
          <div className="col-md-6">
            <div className="text-md-end">
              <a href="https://www.instagram.com/" className="text-white me-3">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com/" className="text-white me-3">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.facebook.com/" className="text-white">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer