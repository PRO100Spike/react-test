import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToFavorite, applyFilter, resetFilter } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Filter from '../components/Filter'

const ProductsContainer = ({ products, addToFavorite, applyFilter, resetFilter }) => (
      <div className="row no-gutters">
          <div className="col-3">
            <Filter applyFilterOnChange={applyFilter} resetFilterCliked={resetFilter} />
          </div>
          <div className="col-9">
            <Breadcrumb>
                <Breadcrumb.Item href="/">Главная</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Каталог</Breadcrumb.Item>
                <Breadcrumb.Item href="/">Мягкая мебель</Breadcrumb.Item>
                <Breadcrumb.Item active>Диваны</Breadcrumb.Item>
            </Breadcrumb>
            <h1>Диваны</h1>
            <ProductsList title="Products" applyFilterOnChange={applyFilter} resetFilterCliked={resetFilter}>
              {products.map(product =>
                <ProductItem
                  key={product.id}
                  product={product}
                  onAddToFavoriteClicked={() => addToFavorite(product.id)}
                />
              )}
            </ProductsList>
          </div>
      </div>
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
