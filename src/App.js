import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Cadastro from './Cadastro';
import Listados from './Listados';

export default function App(){
    return(
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login   />}/>
                <Route path="/sign-up" element={<Cadastro   />}/>   
                <Route path="/subscriptions" element={<Listados   />}/>             
          
                
            </Routes>
      
      
      
      
      </BrowserRouter>  
    )
}