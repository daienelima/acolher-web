import React, { Fragment } from 'react';

import '../patriocinadores/styles.css';
import Patriocinador01 from '../../assets/01.png';
import Patriocinador02 from '../../assets/02.png';
import Patriocinador03 from '../../assets/03.png';
import Patriocinador04 from '../../assets/04.png';

export default function Patriocinadores() {
  return (
    <Fragment>
      <div className="espaco">
        <img src={Patriocinador01} alt="" />
        <img src={Patriocinador03} alt="" />
        <img src={Patriocinador04} alt="" />
        <img src={Patriocinador02} alt="" />
      </div>
    </Fragment>
  );
}
