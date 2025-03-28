import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './i18n'


const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback='...'>
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
);