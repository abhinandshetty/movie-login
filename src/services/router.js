import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';
import MovieContainer from '../containers/MovieContainer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginContainer />,
  },
  {
    path: '/home',
    element: <MovieContainer />,
  },
]);
