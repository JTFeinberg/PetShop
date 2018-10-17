"use strict";
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCentersThunk} from '../store'
import {Link} from 'react-router-dom'


class LandingPage extends Component {
    componentDidMount() {
        this.props.loadAllCenters()
    }

    render() {
        return (
            <div>
                 <Link to="/centers">See All Centers</Link>
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