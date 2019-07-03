import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToFavorite, applyFilter, resetFilter } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

const ProductsContainer = ({ products, addToFavorite, applyFilter, resetFilter }) => (
  <ProductsList title="Products" applyFilterOnChange={applyFilter} resetFilterCliked={resetFilter}>
    {products.map(product =>
      <ProductItem
        key={product.id}
        product={product}
        onAddToFavoriteClicked={() => addToFavorite(product.id)}
      />
    )}
  </ProductsList>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    inFav: PropTypes.bool.inFav
  })).isRequired,
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
    { addToFavorite, applyFilter, resetFilter }
)(ProductsContainer)
