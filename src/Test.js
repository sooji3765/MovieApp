import React from 'react'
import PropTypes from 'prop-types';

export default function Test({actor}) {
    return (
        <div>
            <h1>{actor.name} like</h1>
            <img src={actor.image} alt={actor.name}/>
        </div>
    )
}


Test.propType = {
    name : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired
}