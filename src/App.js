import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Login from './Login';
import Cadastro from './Cadastro';
import Listados from './Listados';
import Lista from './Lista';
import Opcoes from './Opcoes';
import { useState } from 'react';

export default function App(){
    return(
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={<Login   />}/>
                  <Route path="/sign-up" element={<Cadastro   />}/>   
                  <Route path="/subscriptions" element={<Listados   />}/>  
                  <Route path="/subscriptions/:idLista" element={<Lista />} />  
                  <Route path="/home/:idLista" element={<Opcoes />} />
            </Routes>
      
      
      
      
      </BrowserRouter>  
    )
}