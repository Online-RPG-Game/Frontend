import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import { Provider } from 'react-redux'

import store from './config/store'

ReactDOM.render(<Provider store={store}>
    <Game />
    </Provider>, document.getElementById('root'));