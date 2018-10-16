"use strict";
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCentersThunk} from '../store'


class LandingPage extends Component {
    componentDidMount() {
        this.props.loadAllCenters()
    }

    render() {
        return (
            <div>
                 <h1>Welcome to the NYC Pet Adoption Center!</h1>
            </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
    return {
      allCenters: state.centers
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      loadAllCenters: () => dispatch(fetchCentersThunk()),
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingPage);