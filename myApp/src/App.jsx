import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Components/Signup';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
