import React from 'react'
import PropTypes from 'prop-types'
import PropsList from './PropsList'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const Product = ({title, imgUrl, link, params, inFav, onAddToFavoriteClicked}) => (
    <div>
        <div className="card-header">
            <h4 className="my-0 font-weight-normal">
                <a href={link}>
                    {title}
                </a>
            </h4>
        </div>
        <img src={imgUrl} className="card-img-top" alt=""/>
        {inFav}
        <span className={'badge favorite badge-secondary ' + (inFav ? 'active' : '') } onClick={onAddToFavoriteClicked}>
          <FontAwesomeIcon icon={faStar}/>
        </span>
        <h1 className="card-title pricing-card-title">Params</h1>
        <div className="card-body">
            <PropsList props={params} />
        </div>
    </div>
)

Product.propTypes = {
    title: PropTypes.string,
    imgUrl: PropTypes.string,
    link: PropTypes.string,
    params: PropTypes.array,
    inFav: PropTypes.bool
}

export default Product
