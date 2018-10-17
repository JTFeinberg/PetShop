import React from 'react'
import {Navbar, Carousel, Footer} from './components'
import Routes from './routes'



const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Carousel />
        <Routes />
      </main>
      <Footer />
    </div>
  )
}


export default App;

