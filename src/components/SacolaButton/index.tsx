import { BsBagFill } from '@react-icons/all-files/bs/BsBagFill'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function SacolaButton() {
    const navegate = useNavigate()
    return (
        <Sacola onClick={() => navegate('/sacola/')}>
            <BsBagFill />
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

`