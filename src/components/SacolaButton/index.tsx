import { BsBagFill } from '@react-icons/all-files/bs/BsBagFill'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function SacolaButton() {
    const navegate = useNavigate()
    const pedido = JSON.parse(localStorage.getItem('pedido') || '')
    const pratos = pedido[0].pratos
    console.log(pratos);
    


    return (
        <Sacola onClick={() => navegate('/sacola/')}>
            <BsBagFill/>
            <span> {pratos} </span>
        </Sacola>
    )
}

const Sacola = styled.button`
    color: var(--cor3);
    background-color: transparent;
    font-size: 2rem;
    border: none;
    border-radius: 50%;
    padding: 1rem;
    cursor: pointer;
    transition: 200ms;

    &:hover{
        color: var(--cor4);
    }
    span{
        color: var(--cor1);
        font-size: 1rem;
        position: relative;
        top: -6px;
        left: -50%;
    }

`