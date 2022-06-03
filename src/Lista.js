import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Lista(){
    const enviar = localStorage.getItem("ola");
    const { idLista } = useParams();
    // const [papel, setPapel] = useState([]);
    const [membershipId, setMembershipId] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [securityNumber, setSecurityNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    

    const listao = localStorage.getItem("ola");
    const navigate = useNavigate('');


   
    
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${enviar}`
            }
        }
        const request = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idLista}`,config);
        request.then((res) => {
            console.log(res.data);
        });
        
    }, []);

    function enviardados(){
        const configr = {
            headers: {
                Authorization: `Bearer ${listao}`
            }
        }
        const body = {
            membershipId,
            cardName,
            cardNumber,
            securityNumber, 
            expirationDate,
        }
        const require = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions',body, configr);
        require.then((obj) => {
            console.log(obj.data);
            navigate("/home");
        })
    }
    
    
    
    
    return (
        <Input>
            <InputImpresso type="text" placeholder="Nome impresso no cartão" value={membershipId} onChange={(e) => setMembershipId(e.target.value)}/>
            <InputImpresso type="text" placeholder="Nome impresso no cartão" value={cardName} onChange={(e) => setCardName(e.target.value)}/>
            <InputDigitos type="text" placeholder="Digitos do cartão" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            <InputCodigo type="password" placeholder="Código de segurança" value={securityNumber} onChange={(e) => setSecurityNumber(e.target.value)}/>
            <InputValidade type="text" placeholder="Validade" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)}/>
            <ButtonAssinar onClick={enviardados}>Assinar</ButtonAssinar>
        </Input>
    )
}
const Input = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`
const InputImpresso = styled.input`
    width: 303px;
    height: 45px;

`
const InputDigitos = styled.input`
    width: 303px;
    height: 45px;
`
const InputCodigo = styled.input`
    width: 303px;
    height: 45px;
`
const InputValidade = styled.input`
    width: 303px;
    height: 45px;
`
const ButtonAssinar = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF
`
const tipoId = styled.div`
    display: flex;
`