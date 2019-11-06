import React, { Fragment } from 'react';

import '../patriocinadores/styles.css';
import Patriocinador01 from '../../assets/01.png';
import Patriocinador02 from '../../assets/02.png';
import Patriocinador03 from '../../assets/03.png';
import Patriocinador04 from '../../assets/04.png';

export default function Patriocinadores() {
  return (
    <Fragment>
      <section className="espaco">
        <div className="col-md-12">
          <strong className="mb-3 mt-3">Nossos patrocinadores</strong>
          <div className="row">
            <div className="col-md-3 item">
              <img src={Patriocinador01} alt="" />
            </div>
            <div className="col-md-3 item">
              <img src={Patriocinador03} alt="" />
            </div>
            <div className="col-md-3 item">
              <img src={Patriocinador04} alt="" />
            </div>  
            <div className="col-md-3 item">
              <img src={Patriocinador02} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
