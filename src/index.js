import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import GlobalContext from '~/GlobalContext';
import GlobalStyles from '~/globalStyles/index';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <PayPalScriptProvider
        options={{
            'client-id': 'AfyVExyyQHH231Jsr1zdRcoU1SRDBYXPowxqBhokXJRuev7DVWnxutWkG5v9IZRuirnUzMvwtH67MmdX',
            currency: 'USD',
        }}
    >
        <GlobalContext>
            <BrowserRouter>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </BrowserRouter>
        </GlobalContext>
    </PayPalScriptProvider>,
    // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
