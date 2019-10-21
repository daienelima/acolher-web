import React, { Fragment } from 'react';

import '../conectados/styles.css';
import Consultas from '../../assets/Consulta.png';
import Pessoas from '../../assets/heart.png';
import Instituicao from '../../assets/Instituicao.png';

var stylePessoas = {
  backgroundImage: `url(${Pessoas})`
};

var styleConsultas = {
  backgroundImage: `url(${Consultas})`
};

var styleInstituicao = {
  backgroundImage: `url(${Instituicao})`
};

export default function Conectados() {
  return (
    <Fragment>
      <div className="container-conectados">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm item">
              <div className="icon" style={stylePessoas}></div>
              <h3>1000</h3>
              <h5>Pessoas ajudadas</h5>
            </div>
            <div className="col-sm item">
              <div className="icon" style={styleConsultas}></div>
              <h3>1200</h3>
              <h5>Consultas agendadas</h5>
            </div>
            <div className="col-sm item">
              <div className="icon" style={styleInstituicao}></div>
              <h3>300</h3>
              <h5>Instituições associadas</h5>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}