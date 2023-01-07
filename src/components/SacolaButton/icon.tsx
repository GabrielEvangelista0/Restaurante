import { BsBagFill } from '@react-icons/all-files/bs/BsBagFill'
import { useRecoilValue } from 'recoil'
import { pratosPedidosState } from 'state/atom'
import styled from 'styled-components'

export default function Icon(){
    const pedidos = useRecoilValue(pratosPedidosState)
    return(
        <StyledIcon>
            <BsBagFill/>
            <span>{pedidos.length}</span>
        </StyledIcon>
    )
}

const StyledIcon = styled.div`
    font-size: 2rem;
    &:hover{
        color: var(--cor4);
    }
    span{
        color: white;
        position: relative;
        font-size: 0.9rem;
        top: -6px;
        left: -50%;
    }

`