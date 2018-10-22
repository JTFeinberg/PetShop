"use strict";
import React from 'react'
import {connect} from 'react-redux'
import {Card} from './'


const AllAnimals = ({allAnimals}) => (
  <ul className="allAnimals" >
    <h1>ALL LOCATIONS</h1>
    <div className="row">
      {allAnimals.map((animal) => (
          <Card key={animal.id} animal={animal} />
      ))}
    </div>
  </ul>
)

/**
 * CONTAINER
 */
const mapStateToProps = state => {
    return {
      allAnimals: state.animals
    };
  };

  export default connect(
    mapStateToProps
  )(AllAnimals);

