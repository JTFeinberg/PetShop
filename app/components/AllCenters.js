"use strict";
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCentersThunk} from '../store'


const AllCenters = ({allCenters}) => (
            <ul>
                {allCenters.map((center) => (
                    <li key={center.id}>
                        {center.name}
                    </li>
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

