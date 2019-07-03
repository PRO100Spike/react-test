import React from 'react'
import PropTypes from 'prop-types'
import Filter from './Filter'

const ProductsList = ({title, children, applyFilterOnChange, resetFilterCliked}) => (
    <div>
        <h3>{title}</h3>
        <Filter applyFilterOnChange={applyFilterOnChange} resetFilterCliked={resetFilterCliked} />
        <div className="card-deck mb-3 text-center">
            <div className="card-deck mb-3 text-center">{children}</div>
        </div>
    </div>
)

ProductsList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    applyFilterOnChange: PropTypes.func.isRequired,
    resetFilterCliked: PropTypes.func.isRequired
}

export default ProductsList
