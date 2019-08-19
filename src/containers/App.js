import React from 'react'
import ProductsContainer from './ProductsContainer'
import Search from '../components/Search'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import '../styles/App.css';
import PropTypes from "prop-types";

const App = ({applySearchOnChange}) => (
  <div className="app">
      <header>
          <div className="logo">
              <img src="/images/combined-shape.svg" alt="" />
          </div>
          <Search applyFilterOnChange={applySearchOnChange} />
          <div className="counter-right__block">
                <ul>
                    <li className="favorite-count">10</li>
                    <li className="product-in-cart-count">2</li>
                </ul>
          </div>
      </header>
      <Navbar bg="light" expand="lg" className="border">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ml-auto">
                  <NavDropdown title="Мебель" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Мягкая мебель</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Столы</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Стулья</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Стеллажи</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Шкафы-купе</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">Хранение</Nav.Link>
                  <Nav.Link href="#home">Спальня</Nav.Link>
                  <Nav.Link href="#home">Кухня</Nav.Link>
                  <Nav.Link href="#home">Аксессуары</Nav.Link>
                  <Nav.Link href="#home">Акции</Nav.Link>
              </Nav>

          </Navbar.Collapse>
      </Navbar>

      <div className="container">
        <ProductsContainer />
      </div>
  </div>
)

App.prototype = {
    applyFilterOnChange: PropTypes.func.isRequired,
    resetFilterCliked: PropTypes.func.isRequired
}

export default App
