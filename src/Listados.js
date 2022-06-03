import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Listados(){

    const ok = localStorage.getItem("ola");
    const [lista, setLista] = useState([]);
    
    function pegarlista(){
       
        const config = {
            headers: {
                Authorization: `Bearer ${ok}`
            }
        }
   
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', config);
        promise.then((objeto) => {
            setLista(objeto.data);           
            console.log(objeto.data);
            console.log(objeto.data[0].image);

        })
        .catch(err => {
            console.log(err);
        })


    }
    
    return (
        <ul className="list">
            <Button onClick={pegarlista}>OK</Button>
            {lista.map((r) => (
                <li className="listas" key={r.id}>
                  <Link to={`/subscriptions/${r.id}`}>
                    <img src={r.image} alt="driven"/>  
                    <p>{r.price}</p>
                  </Link>
                </li>
            ))}
        </ul>
    )
}


const Button = styled.button`
    display: flex;
    height: 50px;
    width: 50px;
`
