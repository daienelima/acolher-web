import React, { Fragment, Component } from 'react';

import '../conectados/styles.css';
import Consultas from '../../assets/Consulta.png';
import Pessoas from '../../assets/heart.png';
import Instituicao from '../../assets/Instituicao.png';
import api from '../../services/api';
import CountUp from 'react-countup';
var stylePessoas = {
  backgroundImage: `url(${Pessoas})`
};

var styleConsultas = {
  backgroundImage: `url(${Consultas})`
};

var styleInstituicao = {
  backgroundImage: `url(${Instituicao})`
};
export default class Conectados extends Component {
  state = {
    qtdPessoasAjudadas: 0,
    qtdConsultasRealizadas: 0,
    qtdInstituicoes: 0
  };

  componentDidMount() {
    api.get('usuario').then(res => {
      this.setState({ qtdPessoasAjudadas: res.data.length });
    });
    api.get('instituicao').then(res => {
      this.setState({ qtdInstituicoes: res.data.length });
    });
    api.get('consulta').then(res => {
      this.setState({ qtdConsultasRealizadas: res.data.length });
    });
  }
  render() {
    return (
      <Fragment>
        <div className="container-conectados">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm item">
                <div className="icon" style={stylePessoas}></div>
                <h3>
                  <CountUp
                    end={this.state.qtdPessoasAjudadas}
                    duration={3}>
                  </CountUp>
                </h3>
                <h5>Pessoas ajudadas</h5>
              </div>
              <div className="col-sm item">
                <div className="icon" style={styleConsultas}></div>
                <h3>
                  <CountUp
                    end={this.state.qtdConsultasRealizadas}
                    duration={3}>
                  </CountUp>
                </h3>
                <h5>Consultas agendadas</h5>
              </div>
              <div className="col-sm item">
                <div className="icon" style={styleInstituicao}></div>
                <h3>
                  <CountUp
                    end={this.state.qtdInstituicoes}
                    duration={3}>
                  </CountUp>
                  </h3>
                <h5>Instituições associadas</h5>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
