import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App'
import About from './components/pages/About'
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Post from './components/pages/Post';
import Body from './components/bodycom/Body';
import UserClass from './components/pages/UserClass';
import Context from './contextAPI/Context';
// import Grocery from '';

import { lazy } from 'react';

const Comment = lazy(()=> import('./components/pages/Comment'))

const appLayout = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            {
                path : '/',
                element : <Body />
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/contact',
                element : <Contact/>
            },{
                path : '/post/:id',
                element : <Post />
            },{
                path : '/class',
                element : <UserClass name= {'this is how to use props in class'} />
            },
            {
                path : '/grocery',
                element : <Suspense fallback = {<h1>Loading my friend!!</h1>} >
                    <Comment/>
                </Suspense>
            }
        ],
        errorElement : <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Context><RouterProvider router={appLayout} /></Context>
    
);