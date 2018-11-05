"use strict";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "./";
import { Link } from "react-router-dom";
import { fetchSingleAnimalThunk } from "../store";

class AllAnimals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animalId: '',

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target;
    this.setState({[name]: value});
  }

  render() {
    let { allAnimals, loadSingleAnimal, location, centers } = this.props;
    let { animalId } = this.state;
    /*
    location.search = ?centerId=${id#}&type=${type}&id=${id#}
    type refers to the type of animal (Dog,Cat, Rabbit)
    id refers to the animalId
    */
  
    //if no filters applied then simply return an empty obj. Otherwise, return an obj with filter types as keys and the filter criteria as the values
    let filterCriteria = location.search.length ? location.search
      .slice(1)
      .split("&")
      .map(serachString => serachString.split("="))
      .reduce((filterObj, serachArr) => {
        if (serachArr[1].length) {
          filterObj[serachArr[0]] = serachArr[1];
        }
        return filterObj;
      }, {}) : {};
  
    //Use the filterCriteria obj to filter allAnimals. This variable will be used in the returned JSX
    let filteredAnimals = allAnimals.filter(animal => {
      for (let filter in filterCriteria) {
        if (animal[filter] === undefined || animal[filter] != filterCriteria[filter]) {
          return false;
        }
      }
      return true;
    });
  
    return (
      <ul className="allAnimals">
        <form>
        <input
            name="animalId"
            value={animalId}
            onChange={this.handleChange}
            maxLength="6"
            placeholder="Animal ID"
          />
        <select name="action" label="Action" onChange={this.handleChange}>
          {centers.map(center => (
          <option key={center.id} value={center.id}>{center.name}</option>
          ))}
        </select>
        </form>
        <div className="row">
          {filteredAnimals.map(animal => (
            <Link
              onClick={() => loadSingleAnimal(animal)}
              key={animal.id}
              to={`/All Adoptions/${animal.id}`}
            >
              <Card animal={animal} />
            </Link>
          ))}
        </div>
      </ul>
    );
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    allAnimals: state.animals,
    centers: state.centers
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
)(AllAnimals);
