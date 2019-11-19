import React, { Fragment } from 'react';

import '../banner/styles.css';
import Carousel from 'react-bootstrap/Carousel';
import home from '../../assets/home.jpg';
import config from '../../assets/config.jpg';
import agenda from '../../assets/agenda.jpg';

import Googleplay from '../../assets/googleplay.png';

export default function Banner() {
  return (
    <Fragment>
      <div className="nosso-app container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <strong>Nosso app</strong>
              <p>Baixe agora o Acolher para seu celular e faça a diferença</p>
              <a href="javascript" className="anchor-googleplay">
                <img className="googleplay" src={Googleplay} alt=""></img>
              </a>
            </div>
            <div className="col-md-5 mt-3">
              <Carousel>
                <Carousel.Item>
                  <img className="d-block" src={home} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={config} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block" src={agenda} alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
