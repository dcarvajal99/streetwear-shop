import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavigationBar from './components/Navbar/NavigationBar';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Cart from './views/Cart';
import './App.css'
import { ContextProvider } from './context/ContextProvider';
import DetalleProducto from './views/DetalleProducto';
import Footer from './components/footer';

function App() {
  return (
    <div className="App contenedor bg-image opacity-80">
      <BrowserRouter >
        <ContextProvider>
          <NavigationBar  basename="/streetwear-shop"/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/streetwear-shop/" element={<Home />} />
            <Route path="/producto/:id" element={<DetalleProducto />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} /> */
          </Routes>
        <Footer/>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
