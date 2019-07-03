import React from 'react'

const PropsList = ({props}) => (
    <div>
        <dl className="row">
            {props.map((prop, index) =>
                <React.Fragment  key={index}>
                    <dt className="col-sm-5">{prop.name}</dt>
                    <dd className="col-sm-6">{prop.value}</dd>
                </React.Fragment>
            )}
        </dl>
    </div>
)


export default PropsList