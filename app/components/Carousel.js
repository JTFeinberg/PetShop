"use strict";
import React, {Component} from 'react'

export default class Carousel extends Component {
    constructor() {
        super()
        this.state = {
            imgIdx: 0,
            imgUrls: [
                'https://www.nycacc.org/themes/acc/images/slides/hero_home_1.jpg',
                'https://www.nycacc.org/themes/acc/images/slides/hero_home_2.jpg',
                'https://www.nycacc.org/themes/acc/images/slides/hero_home_3.jpg',
                'https://www.nycacc.org/themes/acc/images/slides/hero_home_4.jpg',
    
            ]
        }
    }
    

    render () {
        let {imgIdx, imgUrls} = this.state
      return (
        <div className="carousel">
          <ImageSlide url={ imgUrls[imgIdx % imgUrls.length] } />
        </div>
      );
    }
  } 


  const ImageSlide = ({ url }) => {
    const styles = {
      background: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '420px',
      width: '100vw'
    };
  
    return (
      <div className="image-slide" style={styles}>YO</div>
    );
  }

