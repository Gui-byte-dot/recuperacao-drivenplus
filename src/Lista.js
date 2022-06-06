import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Opcoes from "./Opcoes";


export default function Lista(props) {
    const enviar = localStorage.getItem("ola");
    const { idLista } = useParams();
    // const [papel, setPapel] = useState([]);
    const [membershipId, setMembershipId] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [securityNumber, setSecurityNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    // const TodoRemaining = () => <div>Remaining</div>;
    // const TodoDone = () => <div>Done</div>;
    const navigate = useNavigate();
    const listao = localStorage.getItem("ola");
    const [folha, setFolha] = useState([]);
    // const [showElement, setShowElement] = useState(false)
    // const showOrHide = () => setShowElement(true)
    // const [isSignUp, setSignUp] = useState(true);

    // const [description, setDescription] = useState(false);

    // const descriptionHandler = () => {
    //     setDescription(true);
    // };





    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${enviar}`
            }
        }
        const request = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idLista}`, config);
        request.then((res) => {
            setFolha([res.data])
            console.log(res.data);
        });

    }, []);

    function enviardados() {
        const configr = {
            headers: {
                Authorization: `Bearer ${listao}`
            }
        }
        const body = {
            membershipId: idLista,
            cardName,
            cardNumber,
            securityNumber,
            expirationDate,
        }
        const require = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', body, configr);
        require.then((obj) => {
            console.log(obj.data);
            navigate(`/home/${idLista}`)

        })
    }

    // const container = () => {
    //     document.getElementById('conteudo')
    // }
    // function ocultar(){
    //     container.classList.remove('conteudo');

    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("voce clicou em enviar");
    //     this.setDescription({visibility: 'hidden'});       
    // }
    // onSubmit={handleSubmit}
    return (
        <div>
            {folha.map((t) => {
                return (
                    <>
                        <div className="drivens">
                            <img src={t.image} alt="imagens" />
                            <p>{t.name}</p>
                        </div>
                        <div className="beneficios">
                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.854 5.146C9.90056 5.19245 9.93751 5.24762 9.96271 5.30837C9.98792 5.36911 10.0009 5.43423 10.0009 5.5C10.0009 5.56577 9.98792 5.63089 9.96271 5.69163C9.93751 5.75238 9.90056 5.80755 9.854 5.854L8.104 7.604C8.01291 7.69498 7.89023 7.74732 7.76151 7.75012C7.63279 7.75291 7.50796 7.70595 7.413 7.619L6.663 6.934C6.57011 6.84339 6.51609 6.72022 6.51234 6.59051C6.5086 6.4608 6.55543 6.33472 6.64293 6.2389C6.73044 6.14308 6.85177 6.08504 6.98129 6.07703C7.1108 6.06903 7.23836 6.11169 7.337 6.196L7.734 6.558L9.146 5.146C9.19245 5.09944 9.24762 5.06249 9.30837 5.03729C9.36911 5.01208 9.43423 4.99911 9.5 4.99911C9.56577 4.99911 9.63089 5.01208 9.69163 5.03729C9.75238 5.06249 9.80755 5.09944 9.854 5.146ZM9.854 10.854C9.94789 10.7602 10.0007 10.633 10.0008 10.5004C10.0009 10.3677 9.94825 10.2404 9.8545 10.1465C9.76075 10.0526 9.63354 9.99981 9.50085 9.99972C9.36817 9.99963 9.24089 10.0522 9.147 10.146L7.734 11.558L7.337 11.196C7.23836 11.1117 7.1108 11.069 6.98129 11.077C6.85177 11.085 6.73044 11.1431 6.64293 11.2389C6.55543 11.3347 6.5086 11.4608 6.51234 11.5905C6.51609 11.7202 6.57011 11.8434 6.663 11.934L7.413 12.619C7.5079 12.7057 7.63252 12.7524 7.761 12.7496C7.88948 12.7468 8.01195 12.6947 8.103 12.604L9.853 10.854H9.854ZM2.5 6C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7H5C5.13261 7 5.25979 6.94732 5.35355 6.85355C5.44732 6.75979 5.5 6.63261 5.5 6.5C5.5 6.36739 5.44732 6.24021 5.35355 6.14645C5.25979 6.05268 5.13261 6 5 6H2.5ZM2 11.5C2 11.3674 2.05268 11.2402 2.14645 11.1464C2.24021 11.0527 2.36739 11 2.5 11H5C5.13261 11 5.25979 11.0527 5.35355 11.1464C5.44732 11.2402 5.5 11.3674 5.5 11.5C5.5 11.6326 5.44732 11.7598 5.35355 11.8536C5.25979 11.9473 5.13261 12 5 12H2.5C2.36739 12 2.24021 11.9473 2.14645 11.8536C2.05268 11.7598 2 11.6326 2 11.5ZM3.085 1C3.18844 0.707422 3.38008 0.454129 3.63351 0.275028C3.88694 0.0959278 4.18967 -0.00016248 4.5 2.06237e-07H7.5C7.81033 -0.00016248 8.11306 0.0959278 8.36649 0.275028C8.61992 0.454129 8.81156 0.707422 8.915 1H10.5C10.8978 1 11.2794 1.15804 11.5607 1.43934C11.842 1.72064 12 2.10218 12 2.5V14.5C12 14.8978 11.842 15.2794 11.5607 15.5607C11.2794 15.842 10.8978 16 10.5 16H1.5C1.10218 16 0.720644 15.842 0.43934 15.5607C0.158035 15.2794 0 14.8978 0 14.5V2.5C0 2.10218 0.158035 1.72064 0.43934 1.43934C0.720644 1.15804 1.10218 1 1.5 1H3.085ZM4.5 1C4.36739 1 4.24021 1.05268 4.14645 1.14645C4.05268 1.24022 4 1.36739 4 1.5C4 1.63261 4.05268 1.75979 4.14645 1.85355C4.24021 1.94732 4.36739 2 4.5 2H7.5C7.63261 2 7.75979 1.94732 7.85355 1.85355C7.94732 1.75979 8 1.63261 8 1.5C8 1.36739 7.94732 1.24022 7.85355 1.14645C7.75979 1.05268 7.63261 1 7.5 1H4.5ZM3.085 2H1.5C1.36739 2 1.24021 2.05268 1.14645 2.14645C1.05268 2.24022 1 2.36739 1 2.5V14.5C1 14.6326 1.05268 14.7598 1.14645 14.8536C1.24021 14.9473 1.36739 15 1.5 15H10.5C10.6326 15 10.7598 14.9473 10.8536 14.8536C10.9473 14.7598 11 14.6326 11 14.5V2.5C11 2.36739 10.9473 2.24022 10.8536 2.14645C10.7598 2.05268 10.6326 2 10.5 2H8.915C8.81156 2.29258 8.61992 2.54587 8.36649 2.72497C8.11306 2.90407 7.81033 3.00016 7.5 3H4.5C4.18967 3.00016 3.88694 2.90407 3.63351 2.72497C3.38008 2.54587 3.18844 2.29258 3.085 2Z" fill="#FF4791" />
                            </svg>
                            <p>Beneficios</p>
                        </div>
                        <ul className="bfs">
                            <li>{t.perks[0]?.title}</li>
                            <li>{t.perks[1]?.title}</li>
                            <li>{t.perks[2]?.title}</li>
                            <li>{t.perks[3]?.title}</li>
                        </ul>
                        <div className="precos">
                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.854 5.146C9.90056 5.19245 9.93751 5.24762 9.96271 5.30837C9.98792 5.36911 10.0009 5.43423 10.0009 5.5C10.0009 5.56577 9.98792 5.63089 9.96271 5.69163C9.93751 5.75238 9.90056 5.80755 9.854 5.854L8.104 7.604C8.01291 7.69498 7.89023 7.74732 7.76151 7.75012C7.63279 7.75291 7.50796 7.70595 7.413 7.619L6.663 6.934C6.57011 6.84339 6.51609 6.72022 6.51234 6.59051C6.5086 6.4608 6.55543 6.33472 6.64293 6.2389C6.73044 6.14308 6.85177 6.08504 6.98129 6.07703C7.1108 6.06903 7.23836 6.11169 7.337 6.196L7.734 6.558L9.146 5.146C9.19245 5.09944 9.24762 5.06249 9.30837 5.03729C9.36911 5.01208 9.43423 4.99911 9.5 4.99911C9.56577 4.99911 9.63089 5.01208 9.69163 5.03729C9.75238 5.06249 9.80755 5.09944 9.854 5.146ZM9.854 10.854C9.94789 10.7602 10.0007 10.633 10.0008 10.5004C10.0009 10.3677 9.94825 10.2404 9.8545 10.1465C9.76075 10.0526 9.63354 9.99981 9.50085 9.99972C9.36817 9.99963 9.24089 10.0522 9.147 10.146L7.734 11.558L7.337 11.196C7.23836 11.1117 7.1108 11.069 6.98129 11.077C6.85177 11.085 6.73044 11.1431 6.64293 11.2389C6.55543 11.3347 6.5086 11.4608 6.51234 11.5905C6.51609 11.7202 6.57011 11.8434 6.663 11.934L7.413 12.619C7.5079 12.7057 7.63252 12.7524 7.761 12.7496C7.88948 12.7468 8.01195 12.6947 8.103 12.604L9.853 10.854H9.854ZM2.5 6C2.36739 6 2.24021 6.05268 2.14645 6.14645C2.05268 6.24021 2 6.36739 2 6.5C2 6.63261 2.05268 6.75979 2.14645 6.85355C2.24021 6.94732 2.36739 7 2.5 7H5C5.13261 7 5.25979 6.94732 5.35355 6.85355C5.44732 6.75979 5.5 6.63261 5.5 6.5C5.5 6.36739 5.44732 6.24021 5.35355 6.14645C5.25979 6.05268 5.13261 6 5 6H2.5ZM2 11.5C2 11.3674 2.05268 11.2402 2.14645 11.1464C2.24021 11.0527 2.36739 11 2.5 11H5C5.13261 11 5.25979 11.0527 5.35355 11.1464C5.44732 11.2402 5.5 11.3674 5.5 11.5C5.5 11.6326 5.44732 11.7598 5.35355 11.8536C5.25979 11.9473 5.13261 12 5 12H2.5C2.36739 12 2.24021 11.9473 2.14645 11.8536C2.05268 11.7598 2 11.6326 2 11.5ZM3.085 1C3.18844 0.707422 3.38008 0.454129 3.63351 0.275028C3.88694 0.0959278 4.18967 -0.00016248 4.5 2.06237e-07H7.5C7.81033 -0.00016248 8.11306 0.0959278 8.36649 0.275028C8.61992 0.454129 8.81156 0.707422 8.915 1H10.5C10.8978 1 11.2794 1.15804 11.5607 1.43934C11.842 1.72064 12 2.10218 12 2.5V14.5C12 14.8978 11.842 15.2794 11.5607 15.5607C11.2794 15.842 10.8978 16 10.5 16H1.5C1.10218 16 0.720644 15.842 0.43934 15.5607C0.158035 15.2794 0 14.8978 0 14.5V2.5C0 2.10218 0.158035 1.72064 0.43934 1.43934C0.720644 1.15804 1.10218 1 1.5 1H3.085ZM4.5 1C4.36739 1 4.24021 1.05268 4.14645 1.14645C4.05268 1.24022 4 1.36739 4 1.5C4 1.63261 4.05268 1.75979 4.14645 1.85355C4.24021 1.94732 4.36739 2 4.5 2H7.5C7.63261 2 7.75979 1.94732 7.85355 1.85355C7.94732 1.75979 8 1.63261 8 1.5C8 1.36739 7.94732 1.24022 7.85355 1.14645C7.75979 1.05268 7.63261 1 7.5 1H4.5ZM3.085 2H1.5C1.36739 2 1.24021 2.05268 1.14645 2.14645C1.05268 2.24022 1 2.36739 1 2.5V14.5C1 14.6326 1.05268 14.7598 1.14645 14.8536C1.24021 14.9473 1.36739 15 1.5 15H10.5C10.6326 15 10.7598 14.9473 10.8536 14.8536C10.9473 14.7598 11 14.6326 11 14.5V2.5C11 2.36739 10.9473 2.24022 10.8536 2.14645C10.7598 2.05268 10.6326 2 10.5 2H8.915C8.81156 2.29258 8.61992 2.54587 8.36649 2.72497C8.11306 2.90407 7.81033 3.00016 7.5 3H4.5C4.18967 3.00016 3.88694 2.90407 3.63351 2.72497C3.38008 2.54587 3.18844 2.29258 3.085 2Z" fill="#FF4791" />
                            </svg>
                            <h2>Preços</h2>
                        </div>
                        <div className="valores">
                            <h2>R$ {t.price} cobrados mensalmente</h2>
                        </div>
                    </>
                );
            })}
            <InputImpresso type="text" placeholder="Nome impresso no cartão" value={cardName} onChange={(e) => setCardName(e.target.value)} />
            <InputDigitos type="text" placeholder="Digitos do cartão" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            <InputCodigoValidade>
                <InputCodigo type="password" placeholder="Código de segurança" value={securityNumber} onChange={(e) => setSecurityNumber(e.target.value)} />
                <InputValidade type="text" placeholder="Validade" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
            </InputCodigoValidade>
            {/* <div onClick={descriptionHandler}> */}
            <ButtonAssinar onClick={enviardados}><span>Assinar</span></ButtonAssinar>
        </div>

    )

}
const InputCodigoValidade = styled.div`
    margin-top:8px;
    display:flex;
    justify-content:center;

`
const InputImpresso = styled.input`
    width: 299px;
    height: 52px;
    radius: 8px;
    display: flex;
    justify-content:center;
    margin-left: 36px;
    margin-top: 20px;
    background: #FFFFFF;
    border-radius: 8px;
`
const InputDigitos = styled.input`
    width: 299px;
    height: 52px;
    radius: 8px;
    display: flex;
    justify-content:center;
    margin-left: 36px;
    margin-top: 8px;
    background: #FFFFFF;
    border-radius: 8px;
`
const InputCodigo = styled.input`
    width:145px;
    height:52px;
    border-radius: 8px;

`
const InputValidade = styled.input`
    width:145px;
    height:52px;
    border-radius: 8px;

`
const ButtonAssinar = styled.button`
    width: 299px;
    height: 52px;
    background: #52B6FF;
    margin-top:12px;
    background: #FF4791;
    border-radius: 8px;
    color:#FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:36px;
`
