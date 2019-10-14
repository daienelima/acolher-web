import React, { Fragment } from 'react';

import '../conectados/styles.css';
import Consultas from '../../assets/Consulta.png';
import Pessoas from '../../assets/heart.png';
import Instituicao from '../../assets/Instituicao.png';

export default function Conectados() {
  return (
    <Fragment>
      <div className="container-conectados">
        <div className="icon">
          <img src={Pessoas} className="editImage" alt="" />
          <img src={Consultas} className="editImage" alt="" />
          <img src={Instituicao} className="editImage" alt="" />
        </div>
      </div>
    </Fragment>
  );
}
