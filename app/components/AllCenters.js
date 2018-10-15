"use strict";
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCentersThunk} from '../store'


class AllCenters extends Component {
    componentDidMount() {
        this.props.loadAllCenters()
    }

    render() {
        return (
            <ul>
                {this.props.allCenters.map((center) => (
                    <li key={center.id}>
                        {center.name}
                    </li>
                ))}
            </ul>
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
  )(AllCenters);

