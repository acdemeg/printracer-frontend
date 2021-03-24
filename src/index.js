import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import ErrorBoundary from './app/components/error-boundary/ErrorBoundary';
import { Provider } from 'react-redux';
import App from "./app";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <App />
            </Router>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);