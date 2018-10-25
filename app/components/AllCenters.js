"use strict";
import React from 'react'
import {connect} from 'react-redux'
import {Card} from './'
import {Link} from 'react-router-dom'


const AllCenters = ({allCenters}) => (
  <ul className="allCenters" >
    <h1>ALL LOCATIONS</h1>
    <div className="row">
      {allCenters.map((center) => (
          <Link key={center.id} to={`/All Adoptions?center_id=${center.id}`}><Card key={center.id} center={center} /></Link>
      ))}
    </div>
  </ul>
)

/**
 * CONTAINER
 */
const mapStateToProps = state => {
    return {
      allCenters: state.centers
    };
  };

  export default connect(
    mapStateToProps
  )(AllCenters);

