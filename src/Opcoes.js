import { useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Lista from "./Lista";


export default function Opcoes() {
    const pass = localStorage.getItem("ola");
    const [papel, setPapel] = useState([]);
    const { idLista } = useParams();
    const navigate = useNavigate();

    function apagardados() {
        const configur = {
          headers: {
            Authorization: `Bearer ${pass}`
          }
        };
    
        const reque = axios.delete(
          "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
          configur
        );
        reque.then((obj) => {
          console.log(obj.data);
          navigate("/subscriptions");
        });
      }
      function mudardados() {
        const configr = {
          headers: {
            Authorization: `Bearer ${pass}`
          }
        };
        const corp = {
          membershipId: 3,
          cardName: "Fulano Da Silva",
          cardNumber: "1234 1234 1234 1234",
          securityNumber: 123,
          expirationDate: "01/28"
        };
        const requis = axios.post(
          "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
          corp,
          configr
        );
        requis.then((objet) => {
          console.log(objet.data);
          navigate(`/subscriptions`);
        });
      }



    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${pass}`
            }
        }
        const require = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idLista}`, config);
        require.then((rest) => {
            setPapel([rest.data]);
            console.log(rest.data)
            console.log(rest.data.perks[0].title);
        })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (

        <div className="list">

            {papel.length > 0 && papel.map((s) => {
                return (
                <div className="listasopcoes" key={s.id}>
                    <img src={s.image} alt="opcoes" />
                    <h2>Olá, fulano</h2>
                        <p>{s.perks[0]?.title}</p>
                        <p>{s.perks[1]?.title}</p>
                        <p>{s.perks[2]?.title}</p>
                        <p>{s.perks[3]?.title}</p>
                    <h3 onClick={mudardados}>Mudar plano</h3>
                    <h4 onClick={apagardados}>Cancelar plano</h4>
                </div>
                );
            })}      
        </div>

      
    )
}

