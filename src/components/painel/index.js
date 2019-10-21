import React, { Fragment } from 'react';

import Home from '../../assets/home.png';
import '../painel/styles.css';

var styleBannerPrincipal = {
  backgroundImage: `url(${Home})`
};

export default function Painel() {
  return (
    <Fragment>
      <div className="banner-principal" style={styleBannerPrincipal}>
      </div>
    </Fragment>
  );
}
