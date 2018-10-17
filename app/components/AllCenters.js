"use strict";
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCentersThunk} from '../store'
import Card from './Card'


const AllCenters = ({allCenters}) => (
            <ul className="allCenters" >
                {allCenters.map((center) => (
                    <Card key={center.id} center={center} />
                ))}
            </ul>
        );

/**
 * CONTAINER
 */
const mapStateToProps = state => {
    return {
      allCenters: state.centers
    };
  };

  //Leave for now but does nothing at the moment
  const mapDispatchToProps = dispatch => {
    return {
      loadAllCenters: () => dispatch(fetchCentersThunk()),
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AllCenters);

