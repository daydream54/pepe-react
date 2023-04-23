import React from 'react';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import './styles/global.css';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
