import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({product, onAddToFavoriteClicked}) => (
        <Product
            title={product.title}
            imgUrl={'/images/' +  product.imgUrl}
            link={product.link}
            params={product.params}
            inFav={product.inFav}
            onAddToFavoriteClicked={onAddToFavoriteClicked}
        />
)

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        imgUrl: PropTypes.string,
        inFav: PropTypes.bool,
        link: PropTypes.string,
        params: PropTypes.array
    }).isRequired,
    onAddToFavoriteClicked: PropTypes.func.isRequired
}

export default ProductItem
