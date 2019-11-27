import React, { Fragment } from 'react';

import Home from '../../assets/imgBanner2.jpg';
import Logo from '../../assets/logo.png';
import '../painel/styles.css';

var styleBannerPrincipal = {
  backgroundImage: `url(${Home})`
};

export default function Painel() {
  return (
    <Fragment>
      <div className="banner-principal" style={styleBannerPrincipal}>
        <div className="row title">
          <img src={Logo} className="img-logo"></img>
          <h1 className="text">Projeto Acolher</h1>
        </div>
      </div>
    </Fragment>
  );
}
