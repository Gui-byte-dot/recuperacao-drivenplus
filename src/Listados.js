import { useState } from "react";
import axios from "axios";
import styled from "styled-components";



export default function Listados(){

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('');
    const [perks, setPerks] = useState([]);

    const ok = localStorage.getItem("ola");
    
    function pegarlista(){
        const body = {
            id,
            name,
            image,
            price,
            perks,
        }
        const config = {
            headers: {
                Authorization: `Bearer ${ok}`
            }
        }
   
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships', body, config);
        promise.then((objeto) => {
            setId(objeto.data.id)
            setName(objeto.data.name);
            setImage(objeto.data.image);
            setPrice(objeto.data.price);
            setPerks(objeto.data.perks);
            console.log(objeto.data);

        })
        .catch(err => {
            console.log(err);
        })


    }
    
    return (
        <List>
            <Button onClick={pegarlista}>OK</Button>
        </List>
    )
}

const List = styled.div`
    display: flex;
    flex-direction: column;
`
const Button = styled.button`
    display: flex;
    height: 50px;
    width: 50px;
`