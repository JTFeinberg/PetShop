"use strict";
import React from 'react'


const Card = ({center, selection, animal}) => {
    let data = center || selection || animal;
    return (
    <li className='card-body columns'>
        <div>
            <span>
                <img src={data.imageUrl} style={{ width: "100%", height: "345px"}} />
            </span>
        </div>
        <div>
            <span>
                <h4>{data.name}</h4>
            </span>
        </div>
        <div>
            <span>
                <h6>{data.location}</h6>
            </span>
        </div>
    </li>
  );
};

export default Card;

