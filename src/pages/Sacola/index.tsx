import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { SlArrowDown, SlArrowUp } from "react-icons/sl"
import { useAdcionar, useSubtrair } from "state/hooks/mudaQuantidadeDoPedido"
import { useMostrarPedidos } from "state/hooks/useMostrarPedidos"

export default function Sacola() {

    const navegate = useNavigate()
    const pedidos = useMostrarPedidos()
    const adicionar = useAdcionar()
    const subtrair = useSubtrair()

    return (
        <StyledSacola>

            <PratosSacola>
                {pedidos.map(pedido => (
                    <StyledPrato key={pedido.id}>
                        <img src={pedido.prato.photo} alt="" />
                        <div className="descricao">
                            <h3 onClick={() => navegate(`/prato/${pedido.prato.id}/`)} > {pedido.prato.title} </h3>
                            <div className="tags">
                                <span className={pedido.prato.category.label.toLocaleLowerCase()}> {pedido.prato.category.label} </span>
                                <span> serve {pedido.prato.serving} pessoas </span>
                                <span> {pedido.prato.size}g </span>
                            </div>
                            <span className="price"> {pedido.prato.price * pedido.quantidade}R$ </span>
                            <div className="quantidade">
                                <span>Qtd: <span>{pedido.quantidade}</span></span>
                                <div className="setas">
                                    <SlArrowUp
                                        role='button'
                                        onClick={() => adicionar(pedido)}
                                    />
                                    <SlArrowDown
                                        role='button'
                                        onClick={() => subtrair(pedido)}
                                    />
                                </div>
                            </div>
                        </div>
                    </StyledPrato>
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

`

const StyledPrato = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 35%;
    margin-bottom: 2rem;

    img{
        width: 250px;
        box-shadow: 3px 3px 5px rgb(0 0 0 / 10%);
        border-radius: 25px;
    }

    .descricao{
       h3{
        cursor: pointer;

        &:hover{
            color: var(--cor3);
        }
       } 

       .tags{
        font-weight: bold;
        margin-bottom: 1.5rem;
        font-size: 1rem;

        span{
            margin: 0 0.3rem;
            padding: .5rem;
            border-radius: 25px;
            font-weight: bold;
        }

        .massas{
            background-color: var(--cor4);
            color: var(--cor0);
        }
        .carnes{
            background-color: var(--cor2);
            color: var(--cor0);
        }
        .veganos{
            background-color: var(--cor5);
            color: var(--cor0);
        }
        .combos{
            background-color: var(--cor1);
            color: var(--cor0);
        }
       }
    }

    .price{
        display: block;
        font-family: 'Great Vibes', cursive;
        font-size: 2rem;
        font-weight: bold;
    }

    .quantidade{
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            padding: 1rem;
        }
        .setas{
            display: flex;
            flex-direction: column;
            color: var(--cor3);
            cursor: pointer;
        }
    }


`