import React from 'react'
import PropTypes from 'prop-types'
import PropsList from './PropsList'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faCartPlus} from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card'

const Product = ({title, imgUrl, link, params, inFav, onAddToFavoriteClicked}) => (
    <Card style={{ width: '310px' }}>
        <a className="product-link" href={link}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                    <Card.Title>{title}</Card.Title>
            </Card.Body>
            <div className="card-footer-w-100">
                <div className="price">10 990 руб.</div>
                <div className="counter-block">
                    <FontAwesomeIcon className={'favorite ' + (inFav ? 'active' : '') }  icon={faHeart} onClick={onAddToFavoriteClicked}/>
                    <FontAwesomeIcon icon={faCartPlus}/>
                </div>
            </div>
        </a>
    </Card>
)

Product.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    link: PropTypes.string,
    params: PropTypes.array,
    inFav: PropTypes.bool
}

export default Product
