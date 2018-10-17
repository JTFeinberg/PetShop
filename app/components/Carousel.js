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
        };
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({imgIdx: this.state.imgIdx + 1});
        }, 5000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
      }

    render () {
        let {imgIdx, imgUrls} = this.state;
      return (
        <div id="carousel">
          {imgUrls.map((url, idx) => {
              let imgClass = imgIdx % imgUrls.length === idx ? 'carousel-image' : 'carousel-image hidden';
              return (<img className={imgClass} src={url} key={idx} />);
          })}
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

