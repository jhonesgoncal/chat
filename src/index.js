import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//config firebase
import base from './base';

ReactDOM.render(<App  base={base} />, document.getElementById('root'));
registerServiceWorker();
