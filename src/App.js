import React, { Fragment } from 'react';

import Painel from './components/painel';
import Nos from './components/nos';
import Conectados from './components/conectados';
import Banner from './components/banner';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Painel />
        <Nos />
        <Conectados />
        <Banner />
      </div>
    </Fragment>
  );
}

export default App;
