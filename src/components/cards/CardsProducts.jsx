import React from 'react';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import Context from '../../context/ContextProvider';
import '../../App.css'
import { useNavigate } from 'react-router-dom';


const CardsProducts = () => {

    const { productos, añadirAlCarrito, clp } = useContext(Context)
    const Navigate = useNavigate();
    const irAVerMas = (id) => {
        Navigate(`/Producto/${id}`);
    }



    return (
        <div className="container">
            <div className="row">
                {productos.map((product) => (
                    <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-4" key={product.id}>
                        <div className="card h-100">
                            <img src={product.foto}
                                className="card-img-top"
                                alt={product.nombre}
                                onClick={() => irAVerMas(product.id)}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.nombre}</h5>
                                <p className="card-text">{product.descripcion.slice(0, 50)}...</p>
                            </div>
                            <div className="card-footer d-flex justify-content-between align-items-center">
                                <div>
                                    <h3 className="text-muted"><strong>{clp(product.precio)}</strong></h3>
                                </div>
                                <div className="">
                                    <Button variant="dark flex" className=" btn-block mb-2 d-md-block" onClick={() => irAVerMas(product.id)}>Ver más</Button>

                                </div>

                            </div>
                            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                            {product.tallas.map((tallaObj, index) => (
                                <button type="button" key={index} className="btn btn-dark" onClick={() => añadirAlCarrito(product.id,tallaObj.talla)}>{(tallaObj.talla.length>3) ? tallaObj.talla.substring(3) : tallaObj.talla}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CardsProducts;
