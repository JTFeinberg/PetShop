"use strict";
import React from "react";
import { connect } from "react-redux";
import { Card } from "./";
import { Link } from "react-router-dom";
import { fetchSingleAnimalThunk } from "../store";

const AllAnimals = ({ allAnimals, loadSingleAnimal, location }) => {
  //location.search = ?center_id=${id#}&animal_type=${type}&animal_id=${id#}
  let filterCriteria = location.search
    .slice(1)
    .split("&")
    .map(serachString => serachString.split("="))
    .reduce((filterObj, serachArr) => {
      if (serachArr[1].length) {
        filterObj[serachArr[0]] = serachArr[1];
      }
      return filterObj;
    }, {});
    
  return (
    <ul className="allAnimals">
      <h1>ALL ANIMALS</h1>
      <div className="row">
        {allAnimals.map(animal => (
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
};

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    allAnimals: state.animals
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
