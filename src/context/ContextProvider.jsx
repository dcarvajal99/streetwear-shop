import { createContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
const Context = createContext()

const ContextProvider = ({ children }) => {

    const { id } = useParams();
    /* Fetch a API LOCAL productos */
    const [productos, setProductos] = useState([]);
    /* Fetch a API LOCAL stock*/
    /* const [stock, setStock] = useState([]) */
    /* carrito */
    const [carrito, setCarrito] = useState([]);
    /* Contador de carriro */
    const [countTotalCarrito, setCountTotalcarrrito] = useState(0);
    /* Total de carrito */
    const [totalCarrito, setTotalCarrito] = useState(0);

    const consultarinfo = async () => {
        const endpoint = "/public/productos.json";
        const response = await fetch(endpoint)
        await response.json().then((data) => {
            setProductos(data.productos);

        })

    }

    /* const consultarStock = async () => {
        const endpoint = "/stock.json";
        const response = await fetch(endpoint)
        await response.json().then((data) => {
            setStock(data.stock);
            console.log(data)
        })

    } */

    /* useNavigate */
    const productoSeleccionado = (id) => {
        return productos.find((producto) => producto.id === id);
    }

    /* Añadir al carrito */
    const añadirAlCarrito = (id,tallaSelect) => {
        let productoEnCarrito = carrito.find((producto) => producto.id === id);

        if (productoEnCarrito) {
            productoEnCarrito.count += 1;
            setCarrito([...carrito]);
        } else {
            productoEnCarrito = productos.find((producto) => producto.id === id);
            productoEnCarrito.count = 1;
            productoEnCarrito.tallaSelected += tallaSelect;
            setCarrito([...carrito, productoEnCarrito]);
        }
    }
    /* sacar del carrito */
    const sacarDelCarrito = (productoid) => {
        let productoEnCarrito = carrito.find((producto) => producto.id === productoid);

        if (productoEnCarrito.count === 1) {
            setCarrito(carrito.filter((producto) => producto.id !== productoid));
        } else {
            productoEnCarrito.count -= 1;
            setCarrito([...carrito]);
        }
    };

    /* Funcion para actualizar los valor en el carrito: el total y la cantidad
    de cosas que se van a agregando al carrito */
    const calcularCarrito = () => {
        let total = 0;
        let countTotal = 0;
        carrito.forEach((item) => {
            total += item.precio * item.count;
            countTotal += item.count;
        });
        setCountTotalcarrrito(countTotal);
        setTotalCarrito(total);
        
    };

    /* Formateado de a peso chileno*/
    const clp = (precio)=>{
        return precio.toLocaleString("es-CL", { style: "currency", currency: "CLP" });
    }
    /* Solo se ejecutará una vez el consultainfo que extrae la informacion del carrito */
    useEffect(() => {

        consultarinfo();
        /* consultarStock(); */
    }, []);

    /* Se ejecutará cada vez que el carrito se modifique */

    useEffect(() => {
        calcularCarrito();
    }, [carrito]);


    return (
        <Context.Provider value={{productos, productoSeleccionado,añadirAlCarrito, countTotalCarrito,totalCarrito, sacarDelCarrito,carrito,clp}}>
            {children}
        </Context.Provider>
    )
}
export { ContextProvider };
export default Context;