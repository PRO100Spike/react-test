import React from 'react'
import ProductsContainer from './ProductsContainer'
import Footer from './Footer'
import Header from './Header'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import '../styles/App.css';


const App = () => (
  <div className="app">
      <Header />

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

      <Footer />
  </div>
)

export default App
