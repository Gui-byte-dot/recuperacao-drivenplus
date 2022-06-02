import styled from 'styled-components';
import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Cadastro(){
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate('');

    function cadastrar(){
        const body = {
            name,
            cpf,
            email,
            password,
        }

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up',body);
        promise.then(res => {
            navigate("/");
        })
        .catch(err => {
            console.log(err);

        })
    }
    return (
        <Input>
            <InputCadastroName type="text" placeholder="nome" value={name} onChange={(e) => setName(e.target.value)}/>
            <InputCadastrodeEmail type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputCadastroCpf type="text" placeholder="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
            <InputCadastrodeSenha type="password" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <ButtonCadastro onClick={cadastrar}>Cadastrar</ButtonCadastro>
            <Link to="/">Já possui uma conta? Faça login</Link>
        </Input>

    )

}
const Input = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
`

const InputCadastrodeEmail = styled.input`
    width: 303px;
    height: 45px;

`
const InputCadastrodeSenha = styled.input`
    width: 303px;
    height: 45px;
`
const InputCadastroName = styled.input`
    width: 303px;
    height: 45px;
`
const InputCadastroCpf = styled.input`
    width: 303px;
    height: 45px;
`



const ButtonCadastro = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF


`



















