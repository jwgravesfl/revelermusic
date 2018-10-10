import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'typeface-allerta-stencil'

import 'font-awesome/css/font-awesome.min.css';

import styled from 'styled-components'

const IndexDiv = styled.div `
    background-color:transparent;
    .clearPadMar {
        padding: 0;
        margin: 0;
    }

`

ReactDOM.render(<IndexDiv><App /></IndexDiv>, document.getElementById('root'));
registerServiceWorker();
