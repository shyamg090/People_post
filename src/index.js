import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App'
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';

const appLayout = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement : <Error/>
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path : 'contact',
        element : <Contact/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <RouterProvider router={appLayout} />
);