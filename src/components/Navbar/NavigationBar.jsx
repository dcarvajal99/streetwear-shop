import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import {GiShoppingCart} from 'react-icons/gi';
import './Navbar.css'
import { useContext } from 'react';
import Context from '../../context/ContextProvider';

function NavigationBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "text-warning ms-3 text-decoration-none pokeball" : "text-white ms-3 text-decoration-none");
  const {totalCarrito,countTotalCarrito,clp} = useContext(Context)
  return (
    
    <Navbar bg="dark" arial="wa" expand="lg">
    <Container>
      <Navbar.Brand  className='mx-3'>
      <NavLink  to="/" >
        <img
          src={process.env.PUBLIC_URL + '/src/img/logo.png'}
          width="190"
          height="50"
          className="d-inline-block align-top img-fluid"
          alt="Logo"
        /> 
          </NavLink>
      </Navbar.Brand>
        <Nav className="ms-auto">
          <NavLink className={setActiveClass} to="/cart" >
          <h3><GiShoppingCart/>{(countTotalCarrito>0) ? ` ${countTotalCarrito}` : ""} {(totalCarrito>0) ? `| ${clp(totalCarrito)}` : ""}  </h3>
          </NavLink>
        </Nav>
      </Container>
    </Navbar>

  );
}


export default NavigationBar;