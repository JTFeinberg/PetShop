import React from 'react'
import {Navbar, Carousel} from './components'
import Routes from './routes'



const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Carousel />
        <Routes />
      </main>
    </div>
  )
}

export default App;

