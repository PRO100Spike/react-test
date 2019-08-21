import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {addToFavorite, applyFilter, resetFilter} from '../actions'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleDown, faChevronCircleUp} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getVisibleProducts} from "../reducers/products";

const Filter = ({applyFilterOnChange, resetFilterCliked}) => (
    <div className="filter">
        <div className="cd-filter-block">
            <Form id="filter-rorm" applyFilterOnChange={applyFilter} resetFilterCliked={resetFilter}>
                <span className="title">Цвет <FontAwesomeIcon icon={faChevronCircleUp} /></span>
                {['checkbox'].map(type => (
                    <div key={`inline-${type}`} className="color-filter mb-3">
                        <Form.Check inline label="" type={type} id={`inline-${type}-1`} className="white" />
                        <Form.Check inline label="" type={type} id={`inline-${type}-2`} className="black" />
                        <Form.Check inline label="" type={type} id={`inline-${type}-3`} className="gray" />
                        <Form.Check inline label="" type={type} id={`inline-${type}-4`} className="brown" />
                        <Form.Check inline label="" type={type} id={`inline-${type}-5`} className="orange" />
                        <Form.Check inline label="" type={type} id={`inline-${type}-6`} className="red" />
                        <Form.Check inline label="" type={type} id={`inline-${type}-7`} className="green" />
                        <Form.Check inline label="" type={type} id={`inline-${type}-8`} className="purple-blue" />
                        <Form.Check inline label="" type={type} id={`inline-${type}-9`} className="blue" />
                    </div>
                ))}
                <span className="title">Материал <FontAwesomeIcon icon={faChevronCircleUp} /></span>
                {['checkbox'].map(type => (
                    <div key={`default-${type}`} className="styled-checkbox mb-3">
                        <Form.Check
                            type={type}
                            id={`material-${type}-1`}
                            label={`Вельвет`}
                        />
                        <Form.Check
                            type={type}
                            id={`material-${type}-2`}
                            label={`Микровелюр`}
                        />
                        <Form.Check
                            type={type}
                            id={`material-${type}-3`}
                            label={`Велюр`}
                        />
                        <Form.Check
                            type={type}
                            id={`material-${type}-4`}
                            label={`Жаккард`}
                        />
                        <Form.Check
                            type={type}
                            id={`material-${type}-5`}
                            label={`Замша`}
                        />
                        <Form.Check
                            type={type}
                            id={`material-${type}-6`}
                            label={`Рогожка`}
                        />
                    </div>
                ))}
                <span className="title">Угол <FontAwesomeIcon icon={faChevronCircleUp} /></span>
                {['checkbox'].map(type => (
                    <div key={`default-${type}`} className="styled-checkbox mb-3">
                        <Form.Check
                            type={type}
                            id={`tangle-${type}-1`}
                            label={`Левый`}
                        />
                        <Form.Check
                            type={type}
                            id={`tangle-${type}-2`}
                            label={`Правый`}
                        />
                        <Form.Check
                            type={type}
                            id={`tangle-${type}-3`}
                            label={`Универсальный`}
                        />
                    </div>
                ))}
                <Button variant="primary" size="lg" className="filter-btn" active onClick={applyFilterOnChange}>
                    Применить
                </Button>
                <Button variant="light" size="lg" className="filter-btn" onClick={resetFilterCliked}>
                    Очистить фильтр
                </Button>
            </Form>
        </div>
    </div>
)

export default Filter