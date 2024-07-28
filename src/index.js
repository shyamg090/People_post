import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App'
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Bodycom from './components/bodycom/Bodycom';
import Recipie from './components/pages/Recipie';

const appLayout = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            {
                path : '/',
                element : <Bodycom />
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/contact',
                element : <Contact/>
            },{
                path : '/recipie/:id',
                element : <Recipie />
            }
        ],
        errorElement : <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <RouterProvider router={appLayout} />
);