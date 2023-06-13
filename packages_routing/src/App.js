import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import DataPage from './Datapage';
import Form from './Form';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path={"/"} element={<Form/>} />
        <Route  path="/data" element={<DataPage/>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
