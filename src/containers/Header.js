import React from 'react'
import Search from '../components/Search'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus, faHeart} from "@fortawesome/free-solid-svg-icons/index";

const Header = () => (
    <div className="container">
        <header>
            <div className="logo">
                <img src="/images/combined-shape.svg" alt=""/>
            </div>
            <Search />
            <div className="counter-right__block">
                <ul>
                    <li className="favorite-count">
                        <FontAwesomeIcon icon={faHeart} color="#0566ff"/> <span>10</span>
                    </li>
                    <li className="product-in-cart-count">
                        <FontAwesomeIcon icon={faCartPlus} color="#0566ff"/> <span>2</span>
                    </li>
                </ul>
            </div>
        </header>
    </div>
)

export default Header
