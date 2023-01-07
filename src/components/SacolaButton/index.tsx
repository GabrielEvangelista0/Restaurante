import { BsBagFill } from '@react-icons/all-files/bs/BsBagFill'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { pratosPedidosState } from 'state/atom'
import styled from 'styled-components'
import Icon from './icon'

export default function SacolaButton() {
    const navegate = useNavigate()
    
    return (
        <Sacola onClick={() => navegate('/sacola/')}>
            <Icon/> 
        </Sacola>
    )
}

const Sacola = styled.button`
    color: var(--cor3);
    background-color: transparent;
    font-size: 2rem;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: 200ms;

`