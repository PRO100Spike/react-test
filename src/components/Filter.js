import React from 'react'

const Filter = ({applyFilterOnChange, resetFilterCliked}) => (
    <div className="filter">
        <div className="searchbar form-group">
            <div className="form-group row">
                <div className="col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search product by name..."
                        onChange={applyFilterOnChange}
                    />
                </div>
                <div className="col">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Favorite:</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onChange={applyFilterOnChange} />
                        <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onChange={applyFilterOnChange} />
                        <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="toolbar">
                        <button className="btn float-right btn-danger" onClick={resetFilterCliked}>
                            <i className="fa fa-ban"></i> Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

export default Filter