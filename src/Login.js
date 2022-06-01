import { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate} from "react-router-dom";

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');

    function logar(){
        const body = {
            email,
            password,
        }
        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', body)
        promise.then(res => {
            console.log(res.data);
            navigate("/sign-up");
            
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <Container>
             <Input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
             <Input type="text" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
             <Button onClick={logar}>Entrar</Button>
             <Link to="/sign-up">Não tem uma conta? Cadastre-se!</Link>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    

`
const Input = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

`
const Button = styled.button`
    background: #52B6FF;
    border-radius: 4.63636px;
    width: 303px;
    height: 45px;

`