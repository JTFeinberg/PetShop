"use strict";
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCentersThunk} from '../store'
import {NavLink} from 'react-router-dom'


class Navbar extends Component {
    componentDidMount() {
        this.props.loadAllCenters()
    }

    render() {
        return (
          <nav>
            <NavLink to="/" id="logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5sMxBv77wRKjHu10uTMz4VLZNAmVdobpHA8x-KrKw_Wjp0K8" />
            </NavLink>
            <div className="nav-link">
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/centers">Locations</NavLink>
                <NavLink to="/animals">Adopt</NavLink>
            </div>
          </nav>
        );
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
  )(Navbar);
