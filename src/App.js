import 'bootstrap/dist/css/bootstrap.min.css' 
import { BrowserRouter,Routes, Route } from "react-router-dom"
import NavigationBar from './components/Navbar/NavigationBar';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Cart from './views/Cart';
import './App.css'

function App() {
  return (
    <div className="App contenedor bg-image opacity-80">
      <BrowserRouter >
        <NavigationBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/streetwear/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} /> */
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
