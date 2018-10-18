"use strict";
import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from './'


const LandingPage = () => {
  const selections = [
    {id: 1, name: 'Locations', imageUrl: 'https://www.nycacc.org/sites/default/files/2017-11/ACC-Hero-Locations.jpg'},
    {id: 2, name: 'All Adoptions', imageUrl: 'https://www.nycacc.org/sites/default/files/2017-11/leadership.jpg'},
    {id: 3, name: 'Dogs', imageUrl: 'https://www.nycacc.org/sites/default/files/styles/max_325x325/public/2018-02/dogs%20updated.jpg?itok=9QOleHxG'},
    {id: 4, name: 'Cats', imageUrl: 'https://www.nycacc.org/sites/default/files/styles/max_325x325/public/2018-02/cats%20updated.jpg?itok=W7YhjeCa'},
    {id: 5, name: 'Bunnies', imageUrl: 'https://www.nycacc.org/sites/default/files/styles/max_325x325/public/2018-02/Bunny%20Updated.jpg?itok=4SVJHnkv'}
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
        <ul>
          <div className="row">
                  {selections.map((selection) => (
                    <Link to={`${selection.name}`} key={selection.id}>
                      <Card  selection={selection} />
                    </Link>
                    ))}
          </div>
        </ul>
      </div>
  );
}


  export default LandingPage;
