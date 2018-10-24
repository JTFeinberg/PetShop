"use strict";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleAnimalThunk } from "../store";

class SingleAnimal extends Component {
  componentDidMount() {
    const { animalId } = this.props.match.params;
    this.props.loadSingleAnimal(animalId);
  }

  render() {
    const { currAnimal } = this.props;
    console.log(currAnimal);
    return currAnimal.id ? (
      <section className="single-animal-content">
        <div className="col-4">
          <img src={currAnimal.imageUrl} />
          <p id="adoption-description">
            Connect with an adoption counselor to find out more about{" "}
            <span>{currAnimal.name}</span>
            by clicking below.
          </p>
          <a href={`mailto:JacobFeinberg92@gmail.com?subject=I’d like to know more about ${currAnimal.name} -- ID: 45033`}><button>I’d Like to Learn more!</button></a>
          <ul>
              <li><p><span>Sex: </span>{currAnimal.sex}</p></li>
              <li><p><span>Age: </span>{currAnimal.age} {currAnimal.age === 1 ? 'year old' : 'years old'}</p></li>
              <li><p><span>Weight: </span>{currAnimal.weight} lbs.</p></li>
              <li><p><span>Location: </span>{currAnimal.center.name}</p></li>
              <li><p><span>Address: </span>{currAnimal.center.location}</p></li>
          </ul>
        </div>
        <div className="col-8" />
      </section>
    ) : null;
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
    loadSingleAnimal: animalId => dispatch(fetchSingleAnimalThunk(animalId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleAnimal);
