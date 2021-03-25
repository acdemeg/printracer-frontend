import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import ErrorBoundary from './app/components/error-boundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { MockServiceProvider } from "./app/components/mock-service-context";
import MockService from "./services/mock-service"
import App from "./app";

const mockService = new MockService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <MockServiceProvider value={mockService}>
                <Router>
                    <App />
                </Router>
            </MockServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
