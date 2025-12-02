import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Registration from '../Pages/Register';
import Login from '../Pages/Login';
import Service from '../Pages/Service/Service';
import PetDetails from '../Pages/PetDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Profile from '../Pages/Profile';
import ErrorPage from '../Pages/ErrorPage';
import ForgetPassword from '../Pages/ForgetPassword';
import About from '../Pages/About';
import Contact from '../Pages/ContactUs';
import Root from '../Layouts/Root';
//import PetsCard from '../Pages/PetsCard';

export const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children: [
        {
            index: true,
            path:'/',
              loader: async () => {
    const [petsRes, tipsRes, vetsRes] = await Promise.all([
      fetch('/pets.json'),
      fetch('/tips.json'),
      fetch('/vets.json')
      
    ]);

    const [pets, tips, vets] = await Promise.all([
      petsRes.json(),
      tipsRes.json(),
      vetsRes.json()
    ]);

    return { pets, tips,  vets};
  },
            element:<Home></Home>,
        },
        {
          path:'/register',
          element:<Registration></Registration>
        },
        {
          path:'/login' ,
         element:<Login></Login>
        },
        {
          path:'/about' ,
         element:<About></About>
        },
        {
          path:'/contactUs' ,
         element:<Contact></Contact>
        },
        {
          path:'/service' ,
          loader:() =>fetch('/pets.json'),
          element: <Service></Service>
        },
        {
          path:'/profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path:'/petDetails/:id' ,
          loader: () =>fetch('/pets.json'),
          element: <PrivateRoute><PetDetails></PetDetails></PrivateRoute>
        },
        {
          path: '/forgetPassword',
          element:<ForgetPassword></ForgetPassword>
        },
        {
          path: '/*' ,
          element:<ErrorPage></ErrorPage>
        }
       
    ]
  },
]);
