"use strict";
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleAnimalThunk} from '../store'


class SingleAnimal extends Component {
    componentDidMount(){
        const { animalId } = this.props.match.params;
        this.props.loadSingleAnimal(animalId);
    }

    render(){
        return (
        <div>
            {this.props.currAnimal.name}
        </div>
        )
    }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
    return {
      currAnimal: state.singleAnimal
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      loadSingleAnimal: (animalId) => dispatch(fetchSingleAnimalThunk(animalId))
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleAnimal);