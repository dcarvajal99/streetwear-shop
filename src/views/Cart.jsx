import { Container, Button} from "react-bootstrap"
import { useContext } from 'react';
import Context from '../context/ContextProvider';

const Cart = () => {
    
    const {totalCarrito,countTotalCarrito,carrito,clp,añadirAlCarrito,sacarDelCarrito} = useContext(Context)
    
    return (
        
        <Container 
        className="w-100 vw-100 mt-4 border-bottom rounded"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.75)' }}>
            <h1 className="pt-4 text-center">Cart</h1>
            <p className=" text-center">Llevas <strong>{countTotalCarrito}</strong> producto{(countTotalCarrito===1) ? "" :"s"} en tu carrito</p>
            <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Product</th>
                            <th scope="col">Tallas</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {carrito.map((product) => (
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.nombre}</td>
                            <td>{product.tallaSelected.substring(9)}</td>
                            <td>
                                <Button variant="outline-dark" 
                                        size="sm"
                                        className='me-2'
                                        onClick={()=>sacarDelCarrito(product.id)}> - </Button>
                                    {product.count}
                                <Button variant="outline-dark" 
                                        size="sm"
                                        className='ms-2'
                                        onClick={()=>añadirAlCarrito(product.id,product.tallaSelected)}> + </Button>
                            </td>
                            <td>{clp(product.count * product.precio)}</td>
                        </tr>
                        ))}
                        <tr >
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{clp(totalCarrito)} <Button variant="outline-dark " className={(totalCarrito>0)?"":"d-none"} > Pagar</Button></td>
                        </tr>
                    </tbody>
            </table>
        </Container>
    );
}

export default Cart;