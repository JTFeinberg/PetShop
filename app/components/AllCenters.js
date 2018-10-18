"use strict";
import React from 'react'
import {connect} from 'react-redux'
import {fetchCentersThunk} from '../store'
import Card from './Card'


const AllCenters = ({allCenters}) => (
  <ul className="allCenters" >
    <h1>ALL LOCATIONS</h1>
    <div className="row">
      {allCenters.map((center) => (
          <Card key={center.id} center={center} />
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

