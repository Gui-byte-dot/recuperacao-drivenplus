import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Listados(){

    const ok = localStorage.getItem("ola");
    const [lista, setLista] = useState([]);
    
    useEffect(() => {
       
        const config = {
            headers: {
                Authorization: `Bearer ${ok}`
            }
        }
   
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config);
        promise.then((objeto) => {
            setLista([objeto.data]);           
            console.log(objeto.data);
            console.log(objeto.data[0].image);

        })
        .catch(err => {
            console.log(err);
        })


    }, []);
    
    return (
        <div className="list">
            {lista.map((r) => {
                return (
                <div className="listas" key={r.id}>
                    <h2>Escolha seu Plano</h2>
                  <Link to={`/subscriptions/1}`}>
                    <div className="driven1">
                        <img src={r[0].image} alt="driven"/>  
                        <p>{r[0].price}</p>
                    </div>
                  </Link>
                  <Link to={`/subscriptions/2`}>
                    <div className="driven1">
                        <img src={r[1].image} alt="driven"/>  
                        <p>{r[1].price}</p>
                    </div>
                  </Link>
                  <Link to={`/subscriptions/3`}>
                    <div className="driven1">
                        <img src={r[2].image} alt="driven"/>  
                        <p>{r[2].price}</p>
                    </div>
                  </Link>
                </div>
                );
            })}
        </div>
    )
}


const Button = styled.button`
    display: flex;
    height: 50px;
    width: 50px;
`
