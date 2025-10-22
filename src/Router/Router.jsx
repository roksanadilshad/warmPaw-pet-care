import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/root';
import Home from '../Pages/Home';
import Registration from '../Pages/Register';
import Login from '../Pages/Login';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <h2>Its an  error</h2>,
    children: [
        {
            index: true,
             loader:() => fetch('./pets.json'),
            Component: Home,
        },
        {
          path:'/register',
          Component: Registration
        },
        {
          path:'/login' ,
          Component: Login
        },
        // {
        //   path:'/petsCard/:id',
        //   Component: PetsCard,
        //   loader:() => fetch('./pets.json')
        // }
    ]
  },
]);
