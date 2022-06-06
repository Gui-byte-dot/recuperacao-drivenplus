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
            <InputCadastroName type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}/>
            <InputCadastrodeEmail type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <InputCadastroCpf type="text" placeholder="Cpf" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
            <InputCadastrodeSenha type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <ButtonCadastro onClick={cadastrar}>Cadastrar</ButtonCadastro>
            <div className="conta">
            <Link to="/">
                <p>Já possui uma conta? Faça login</p>
            </Link>
            </div>
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
width: 299px;
height: 52px;
radius: 8px;
display: flex;
justify-content:center;
margin-left: 36px;
margin-top: 16px;
background: #FFFFFF;
border-radius: 8px;

`
const InputCadastrodeSenha = styled.input`
    width: 299px;
    height: 52px;
    radius: 8px;
    display: flex;
    justify-content:center;
    margin-left: 36px;
    margin-top: 16px;
    background: #FFFFFF;
    border-radius: 8px;
`
const InputCadastroName = styled.input`
    width: 299px;
    height: 52px;
    radius: 8px;
    display: flex;
    justify-content:center;
    margin-left: 36px;
    margin-top: 100px;
    background: #FFFFFF;
    border-radius: 8px;
`
const InputCadastroCpf = styled.input`
    width: 299px;
    height: 52px;
    radius: 8px;
    display: flex;
    justify-content:center;
    margin-left: 36px;
    margin-top: 16px;
    background: #FFFFFF;
    border-radius: 8px;
`



const ButtonCadastro = styled.button`
width: 299px;
height: 52px;
background: #52B6FF;
margin-top:24px;
background: #FF4791;
border-radius: 8px;
color:#FFFFFF;
display:flex;
justify-content:center;
align-items:center;
margin-left:36px;


`



















