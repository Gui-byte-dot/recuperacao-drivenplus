import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Cadastro from './Cadastro';
import Listados from './Listados';
import Lista from './Lista';
import Opcoes from './Opcoes';

export default function App(){
    return(
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login   />}/>
                <Route path="/sign-up" element={<Cadastro   />}/>   
                <Route path="/subscriptions" element={<Listados   />}/>  
                <Route path="/subscriptions/:idLista" element={<Lista />} />  
                <Route path="/home" element={<Opcoes />} />
          
                
            </Routes>
      
      
      
      
      </BrowserRouter>  
    )
}