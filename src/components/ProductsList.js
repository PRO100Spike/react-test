import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({title, children}) => (
    <div>
        <div className="card-deck mb-3 text-center">
            {children}
        </div>
    </div>
)

ProductsList.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired
}

export default ProductsList
