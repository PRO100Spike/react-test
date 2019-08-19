import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToFavorite, applyFilter, resetFilter } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleDown, faChevronCircleUp} from "@fortawesome/free-solid-svg-icons";

const ProductsContainer = ({ products, addToFavorite, applyFilter, resetFilter }) => (
      <div className="row no-gutters">
          <div className="col-2">
              <div className="filter">
                  <div className="cd-filter-block">
                      <span className="title">Материал <FontAwesomeIcon icon={faChevronCircleUp} /></span>
                      <ul className="cd-filter-content cd-filters list">
                          <li>
                              <input className="filter" data-filter=".check1" type="checkbox" id="checkbox1" />
                              <label className="checkbox-label" htmlFor="checkbox1">Вельвет</label>
                          </li>
                          <li>
                              <input className="filter" data-filter=".check2" type="checkbox" id="checkbox2" />
                              <label className="checkbox-label" htmlFor="checkbox2">Микровелюр</label>
                          </li>
                          <li>
                              <input className="filter" data-filter=".check3" type="checkbox" id="checkbox3" />
                              <label className="checkbox-label" htmlFor="checkbox3">Велюр</label>
                          </li>
                          <li>
                              <input className="filter" data-filter=".check4" type="checkbox" id="checkbox4" />
                              <label className="checkbox-label" htmlFor="checkbox4">Жаккард</label>
                          </li>
                          <li>
                              <input className="filter" data-filter=".check5" type="checkbox" id="checkbox5" />
                              <label className="checkbox-label" htmlFor="checkbox5">Замша</label>
                          </li>
                          <li>
                              <input className="filter" data-filter=".check6" type="checkbox" id="checkbox6" />
                              <label className="checkbox-label" htmlFor="checkbox6">Рогожка</label>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="col-10">
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
