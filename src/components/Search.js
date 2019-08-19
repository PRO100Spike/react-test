import React from 'react'

const Search = ({applySearchOnChange}) => (
    <div className="filter">
        <div className="searchbar form-group">
            <div className="form-group row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Поиск"
                        onChange={applySearchOnChange}
                    />
                </div>
            </div>
        </div>

    </div>
)

export default Search