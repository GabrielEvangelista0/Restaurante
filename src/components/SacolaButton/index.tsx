import { BsBagFill } from '@react-icons/all-files/bs/BsBagFill'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { pratosPedidosState } from 'state/atom'
import styled from 'styled-components'

export default function SacolaButton() {
    const navegate = useNavigate()
    const pedidos = useRecoilValue(pratosPedidosState)
    
    return (
        <Sacola onClick={() => navegate('/sacola/')}>
            <BsBagFill/>
            <span> {pedidos.length} </span>
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
        font-weight: bold;
        position: relative;
        top: -7px;
        left: -55%;
    }

`