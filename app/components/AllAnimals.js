"use strict";
import React from 'react'
import {connect} from 'react-redux'
import {Card} from './'
import {Link} from 'react-router-dom'

const AllAnimals = ({allAnimals}) => (
  <ul className="allAnimals" >
    <h1>ALL ANIMALS</h1>
    <div className="row">
      {allAnimals.map((animal) => (
          <Link key={animal.id} to={`/All Adoptions/${animal.id}`}><Card  animal={animal} /></Link>
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

