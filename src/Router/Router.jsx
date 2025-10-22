import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Layouts/root';
import Home from '../Pages/Home';
import Registration from '../Pages/Register';
import Login from '../Pages/Login';
import Service from '../Pages/Service/Service';
import PetDetails from '../Pages/PetDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Profile from '../Pages/Profile';
//import PetsCard from '../Pages/PetsCard';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <h2>Its an  error</h2>,
    children: [
        {
            index: true,
              loader: async () => {
    const [petsRes, tipsRes, vetsRes] = await Promise.all([
      fetch('./pets.json'),
      fetch('./tips.json'),
      fetch('./vets.json')
      
    ]);

    const [pets, tips, vets] = await Promise.all([
      petsRes.json(),
      tipsRes.json(),
      vetsRes.json()
    ]);

    return { pets, tips,  vets};
  },
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
        {
          path:'/service' ,
          loader:() =>fetch('./pets.json'),
          element: <PrivateRoute><Service></Service></PrivateRoute>
        },
        {
          path:'/profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path:'/petDetails/:id' ,
          loader: () =>fetch('/pets.json'),
          Component: PetDetails,
        },
       
    ]
  },
]);
