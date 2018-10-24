"use strict";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleAnimalThunk } from "../store";
import { Link } from 'react-router-dom'

class SingleAnimal extends Component {
  componentDidMount() {
    const { animalId } = this.props.match.params;
    if (this.props.currAnimal.id !== +animalId){
      this.props.loadSingleAnimal(animalId);
    }
  }

  render() {
    const { currAnimal } = this.props;
    return currAnimal.id ? (
      <section className="single-animal-content">
        <div className="col-4">
          <img src={currAnimal.imageUrl} />
          <p id="adoption-description">
            Connect with an adoption counselor to find out more about{" "}
            <span>{currAnimal.name}</span>
            {" "}by clicking below.
          </p>
          <a href={`mailto:JacobFeinberg92@gmail.com?subject=I’d like to know more about ${currAnimal.name} -- ID#: ${currAnimal.id}`}><button>I’d Like to Learn more!</button></a>
          <ul>
              <li><p><span>Sex: </span>{currAnimal.sex}</p></li>
              <li><p><span>Age: </span>{currAnimal.age} {currAnimal.age === 1 ? 'year old' : 'years old'}</p></li>
              <li><p><span>Weight: </span>{currAnimal.weight} lbs.</p></li>
              <li><p><span>Location: </span>{currAnimal.center.name}</p></li>
              <li><p><span>Address: </span>{currAnimal.center.location}</p></li>
          </ul>
        </div>
        <div className="col-8">
          <h2>{currAnimal.name}</h2>
          <ul>
              <li><p>ID# {currAnimal.id} </p></li>
              <li><p> - {`${currAnimal.type} `} </p></li>
              <li><p> - {currAnimal.center.name}</p></li>
          </ul>
          <p className="single-animal-description">{currAnimal.description ? currAnimal.description : ''}</p>
          <p className='closing-p'>Head <Link to="/All Adoptions">back to search</Link> more Boroughbreds just like {currAnimal.name}. All animals are microchipped, vaccinated, and spayed or neutered before adoption. </p>
        </div>
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
