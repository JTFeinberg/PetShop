"use strict";
import React, {Component} from 'react'

export default class Carousel extends Component {
    render () {
      return (
        <div className="carousel">
          <ImageSlide url={ imgUrl } />
        </div>
      );
    }
  }


  const ImageSlide = ({ url }) => {
    const styles = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };
  
    return (
      <div className="image-slide" style={styles}></div>
    );
  }

