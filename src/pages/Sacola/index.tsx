import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { SlArrowDown, SlArrowUp } from "react-icons/sl"
import { useAdcionar, useSubtrair } from "state/hooks/mudaQuantidadeDoPedido"
import { useMostrarPedidos } from "state/hooks/useMostrarPedidos"
import PratoPedido from "./PratoPedido"

export default function Sacola() {

    const navegate = useNavigate()
    const pedidos = useMostrarPedidos()
    const adicionar = useAdcionar()
    const subtrair = useSubtrair()

    return (
        <StyledSacola>

            <PratosSacola>
                {pedidos.map(pedido => (
                    <PratoPedido pedido={pedido}/>
                ))}
            </PratosSacola>

            <button onClick={() => navegate('/finalizar-pedido/')}>Finalizar Pedido</button>
        </StyledSacola>
    )
}

const StyledSacola = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    min-height: 75vh;

    button{
        width: 200px;
        background-color: var(--cor1);
        border: none;
        cursor: pointer;
        color: var(--cor3);
        font-weight: bold;
        padding: 1rem;
        border-radius: 25px;
        transition: 300ms;

        &:hover{
            background-color: var(--cor3);
            color: var(--cor1);
        }
    }

`

const PratosSacola = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: auto;

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }

`

