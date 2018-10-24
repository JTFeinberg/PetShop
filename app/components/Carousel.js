"use strict";
import React, { Component } from "react";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgIdx: 0,
      imgUrls: [
        "https://www.nycacc.org/themes/acc/images/slides/hero_home_1.jpg",
        "https://www.nycacc.org/themes/acc/images/slides/hero_home_2.jpg",
        "https://www.nycacc.org/themes/acc/images/slides/hero_home_3.jpg",
        "https://www.nycacc.org/themes/acc/images/slides/hero_home_4.jpg"
      ]
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ imgIdx: this.state.imgIdx + 1 });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    let { imgIdx, imgUrls } = this.state;
    return (
      <section id="carousel">
        <div id="carousel-text">
            <h1>Welcome to the NYC Pet Adoption Center!</h1>
        </div>
        {imgUrls.map((url, idx) => {
          let imgClass =
            imgIdx % imgUrls.length === idx
              ? 'carousel-image'
              : 'carousel-image hidden';
          return <img className={imgClass} src={url} key={idx} />;
        })}
      </section>
    );
  }
}
