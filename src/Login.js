import { useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate('');


    function logar() {
        const body = {
            email,
            password,
        }
        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', body)
        promise.then(res => {
            console.log(res.data);
            console.log(res.data.name);
            localStorage.setItem("ola", res.data.token);
            navigate("/subscriptions");

        })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <Container>
            <div className="image">
                <svg width="299" height="50" viewBox="0 0 299 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M61.0742 10.1486V0.934875H51.0565V48.0681H61.0742V21.0588C60.8646 18.3934 61.7162 15.7528 63.445 13.7078C64.4252 12.836 65.5728 12.1713 66.8182 11.754C68.0637 11.3366 69.3812 11.1752 70.6911 11.2796H81.3432V0.934875H70.3238L61.0742 10.1486Z" fill="white" />
                    <path d="M98.3064 0.934875H88.2887V48.0681H98.3064V0.934875Z" fill="white" />
                    <path d="M140.581 0.934875L128.159 38.9874L115.336 0.934875H104.484L121.614 48.0681H134.403L151.533 0.934875H140.581Z" fill="white" />
                    <path d="M195.01 19.562C194.664 15.6422 193.294 11.8809 191.036 8.65182C189.029 5.82008 186.343 3.53321 183.222 1.99928C180.219 0.62667 176.943 -0.0554134 173.639 0.00351823C159.28 0.00351823 150.264 12.2442 150.264 26.9131C150.195 30.8689 151.236 34.7653 153.272 38.1626C155.308 41.5598 158.256 44.3226 161.785 46.1389C165.434 48.0642 169.51 49.0477 173.639 48.9995C177.069 49.0408 180.473 48.4079 183.657 47.1368C186.631 45.9452 189.334 44.1691 191.604 41.9145L186.662 34.4637C185.108 35.9284 183.34 37.1507 181.419 38.0893C179.198 39.1347 176.762 39.6473 174.307 39.5862C172.001 39.6182 169.717 39.1292 167.628 38.1559C165.671 37.1966 163.985 35.7678 162.72 33.998C161.432 32.1297 160.598 29.989 160.282 27.7446H186.996L195.01 19.562ZM160.482 19.7616C160.931 17.7499 161.783 15.8492 162.987 14.1734C164.072 12.6037 165.528 11.3242 167.228 10.448C168.922 9.54889 170.818 9.0912 172.737 9.1175C174.947 9.05035 177.138 9.53037 179.115 10.5145C180.8 11.4029 182.226 12.709 183.256 14.3065C184.33 15.97 185.077 17.8209 185.46 19.7616H160.482Z" fill="white" />
                    <path d="M33.726 3.72893C30.1045 1.83232 26.063 0.871603 21.972 0.934864H0V48.0681H28.5836L35.5292 40.9832C37.3183 39.2356 38.9601 37.3443 40.4378 35.3285C41.8411 33.5076 42.9664 31.4901 43.777 29.3412C44.5892 27.125 44.9964 24.7818 44.9792 22.4226C45.0271 18.5542 44.0108 14.7466 42.0407 11.4126C40.0357 8.13484 37.1575 5.47507 33.726 3.72893V3.72893ZM33.9932 32.1353C32.8503 34.3332 31.1456 36.192 29.0511 37.5239C27.1633 38.7504 24.9605 39.4087 22.7066 39.4198H8.58177V9.48338H21.037C23.7591 9.47546 26.4377 10.1626 28.8174 11.4791C30.9856 12.7025 32.7846 14.483 34.0266 16.6349C35.2807 18.9524 35.9133 21.5531 35.8631 24.1855C35.9126 26.9491 35.27 29.6813 33.9932 32.1353Z" fill="white" />
                    <path d="M238.319 9.05097C236.924 6.28099 234.756 3.97103 232.075 2.39843C229.185 0.77143 225.911 -0.0554834 222.592 0.00351451C221.188 -0.0203187 219.787 0.124872 218.418 0.43593H217.716L209.569 8.68509V0.934871H199.551V48.0681H209.569V21.6243C209.372 18.3015 210.432 15.0259 212.541 12.4438C213.526 11.3439 214.744 10.4752 216.106 9.90009C217.469 9.32495 218.943 9.05769 220.421 9.1175C222.318 9.07777 224.185 9.58611 225.797 10.5811C227.39 11.6254 228.634 13.1194 229.37 14.872C230.235 16.9817 230.656 19.2461 230.606 21.5245V48.1347H240.623V19.0963C240.679 15.6118 239.889 12.1655 238.319 9.05097Z" fill="white" />
                    <path d="M280.32 1.14294H270.302V48.2762H280.32V1.14294Z" fill="#FF4791" />
                    <path d="M299 29.6926L299 19.7266L251.622 19.7266L251.622 29.6926L299 29.6926Z" fill="#FF4791" />
                </svg>
            </div>
            <Input1 type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input2 type="text" placeholder="senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={logar}>Entrar</Button>
            <div className="conta">
                <Link to="/sign-up">
                    <p>Não tem uma conta? Cadastre-se!</p> 
                </Link>
            </div>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:134px;
    justify-content:center;
    .p{
        color:#FFFFFF;
    }

`
const Input1 = styled.input`
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
const Input2 = styled.input`
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

const Button = styled.button`
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