import React from 'react'
import AllCenters from './AllCenters';
import LandingPage from './LandingPage';

const Root = () => {
  return (
    <div>
      <nav>
        Welcome!
      </nav>
      <main>
        <LandingPage />
        <AllCenters />
      </main>
    </div>
  )
}

export default Root
