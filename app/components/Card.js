"use strict";
import React from 'react'
import {connect} from 'react-redux'


const Card = ({center}) => (
    <li className='card-body columns'>
        <div>
            <span>
                <img src={center.imageUrl} style={{ width: "100%", height: "345px"}} />
            </span>
        </div>
        <div>
            <span>
                <h4>{center.name}</h4>
            </span>
        </div>
        <div>
            <span>
                <h6>{center.location}</h6>
            </span>
        </div>
    </li>
);


export default Card;
