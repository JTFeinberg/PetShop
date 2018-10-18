"use strict";
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCentersThunk} from '../store'
import {Link} from 'react-router-dom'
import Card from './card'


const LandingPage = () => {
  const selections = [
    {type: 'Locations', imgUrl: 'https://www.nycacc.org/sites/default/files/2017-11/ACC-Hero-Locations.jpg'},
    {type: 'All Adoptions', imgUrl: 'https://www.nycacc.org/sites/default/files/2017-11/leadership.jpg'},
    {type: 'Dogs', imgUrl: 'https://www.nycacc.org/sites/default/files/styles/max_325x325/public/2018-02/dogs%20updated.jpg?itok=9QOleHxG'},
    {type: 'Cats', imgUrl: 'https://www.nycacc.org/sites/default/files/styles/max_325x325/public/2018-02/cats%20updated.jpg?itok=W7YhjeCa'},
    {type: 'Bunnies', imgUrl: 'https://www.nycacc.org/sites/default/files/styles/max_325x325/public/2018-02/Bunny%20Updated.jpg?itok=4SVJHnkv'}
  ];
  return (
      <div>
        <p style={{textAlign: 'center', paddingTop: '80px'}}>
          <span style={{fontSize: '2.25vw', fontFamily: 'Arial', lineHeight: '2'}}>
          Surrendering your cat or bringing in a stray cat?
          <br />
          WAIT!
          <br />
          ACC is over capacity with cats! We are temporarily asking the public to schedule all <a href="http://nycacc.org/services/surrender"> pet surrenders</a>, so that we can better attend to the animals currently in our care centers.
          <br />
          Found a stray cat? Bringing in a stray cat may not be in his/her best interest at this time if the cat appears healthy and thriving in the community. If the cat appears injured, please call 311.
          </span>
        </p>
            <Link to="/centers">See All Centers</Link>
      </div>
  );
}


  export default LandingPage;
