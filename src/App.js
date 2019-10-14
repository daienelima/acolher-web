import React, { Fragment } from 'react';

import Painel from './components/painel';
import Nos from './components/nos';
import Conectados from './components/conectados';

function App() {
  return (
    <Fragment>
      <div className="App">
        <Painel />
        <Nos />
        <Conectados />
      </div>
    </Fragment>
  );
}

export default App;
