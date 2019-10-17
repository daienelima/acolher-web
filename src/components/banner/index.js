import React, { Fragment } from 'react';

import Celular from '../../assets/smartphone.png';

export default function Banner() {
  return (
    <Fragment>
      <div>
        <img src={Celular} alt="" />
      </div>
    </Fragment>
  );
}
