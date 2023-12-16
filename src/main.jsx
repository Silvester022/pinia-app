import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { MarketsApp } from './MarketsApp';

import '../styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <MarketsApp />
    </BrowserRouter>
)
