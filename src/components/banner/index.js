import React, { Fragment } from 'react';

import '../banner/styles.css';
import Carousel from 'react-bootstrap/Carousel';

import Googleplay from '../../assets/googleplay.png';

export default function Banner() {
  return (
    <Fragment>
      <div className="nosso-app container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <strong>Nosso app</strong>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
                the undoubtable source.</p>
              <a href="javascript:;" className="anchor-googleplay">
                <img className="googleplay" src={Googleplay} alt=""></img>
              </a>
            </div>
            <div className="col-md-5">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://via.placeholder.com/320x600"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://via.placeholder.com/320x600"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="https://via.placeholder.com/320x600"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            </div>
          </div>
      </div>
    </Fragment>
  );
}
