import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// router -
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//end router -
import Box from './app/containers/generalBox.jsx';

import store from './store';

function App(props){
  return(
    <div>
      <Box/>
    </div>
  )
}

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,document.getElementById('content')
);
