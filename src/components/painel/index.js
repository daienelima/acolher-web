import React, { Fragment } from 'react';

import Home from '../../assets/home.png';
import '../painel/styles.css';

export default function Painel() {
  return (
    <Fragment>
      <div>
        <img src={Home} className="imagem" alt="" />
      </div>
    </Fragment>
  );
}
