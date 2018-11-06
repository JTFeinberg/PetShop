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
      id: '',
      centerId: '',
      type: '',
      filterCriteria: {},
      animalTypes: [
        {id: 1, name: 'All Adoptions'},
        {id: 2, name: 'Dog'},
        {id: 3, name: 'Cat'},
        {id: 4, name: 'Rabbit'}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    /*
    location.search = ?centerId=${id#}&type=${type}&id=${id#}
    type refers to the type of animal (Dog,Cat, Rabbit)
    id refers to the animalId
    */
    if (this.props.location.search.length) {
      let filterCriteria = this.props.location.search.slice(1).split('&').map(serachString => {
        let searchArr = serachString.split("=")
        this.setState({[searchArr[0]]: searchArr[1]})
        return searchArr;
      })
      //Otherwise, return an obj with filter types as keys and the filter criteria as the values
      .reduce((filterObj, serachArr) => {
        if (serachArr[1].length) {
          filterObj[serachArr[0]] = serachArr[1];
        }
        return filterObj;
      }, {});
      this.setState({filterCriteria});

    }
  }

  handleChange({ target }) {
    let { name, value } = target;
    this.setState({[name]: value});
  }

  render() {
    let { allAnimals, loadSingleAnimal, centers } = this.props;
    let { id, centerId, animalTypes, type, filterCriteria } = this.state;
    
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
        <form className="filter-form">
        <input
            name="id"
            value={id}
            onChange={this.handleChange}
            maxLength="6"
            placeholder="Animal ID"
          />
        <select name="type" value={type} onChange={this.handleChange}>
          {animalTypes.map(animalType => (
          <option key={animalType.id} value={animalType.name === 'All Adoptions' ? '' : animalType.name}>{animalType.name}</option>
          ))}
        </select>
        <select name="centerId" value={centerId} onChange={this.handleChange}>
          <option value="" >Locations</option>
          {centers.map(center => (
          <option key={center.id} value={center.id}>{center.name}</option>
          ))}
        </select>
        <input className="filter-submit" type="submit" value="Search" />
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
