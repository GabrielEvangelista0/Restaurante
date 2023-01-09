import { IPedido } from "interfaces/Pedido"
import typePrato from "interfaces/Pratos"
import { SlArrowDown, SlArrowUp } from "react-icons/sl"
import { useNavigate } from "react-router-dom"
import { useAdcionar, useSubtrair } from "state/hooks/mudaQuantidadeDoPedido"
import styled from "styled-components"

interface Props {
    pedido: IPedido
}

export default function PratoPedido({ pedido }: Props) {

    const adicionar = useAdcionar()
    const subtrair = useSubtrair()
    const navegate = useNavigate()

    return (
        <StyledPrato key={pedido.prato.id}>
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
                            className="seta"
                            role='button'
                            onClick={() => adicionar(pedido)}
                        />
                        <SlArrowDown
                            className="seta"
                            role='button'
                            onClick={() => subtrair(pedido)}
                        />
                    </div>
                </div>
            </div>
        </StyledPrato>
    )
}


const StyledPrato = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    margin-bottom: 2rem;

    img{
        width: 250px;
        box-shadow: 3px 3px 5px rgb(0 0 0 / 10%);
        border-radius: 25px;
    }

    .descricao{
        width: 100%;
       h3{
        cursor: pointer;

        &:hover{
            color: var(--cor3);
        }
       } 

       .tags{
        display: flex;
        justify-content: space-evenly;
        font-weight: bold;
        margin-bottom: 1.5rem;
        font-size: 1rem;
        width: 100%;

        span{
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

        .seta{
            margin: .2rem;
            &:hover{
                color: var(--cor1);
            }
        }
    }

    @media screen and (max-width: 1024px) {
           .tags{
            flex-direction: column;
            align-items: center;
            span{
                font-size: 0.7rem;
                padding: 0px;
                width: 150px;
            }
           }
        }
    @media screen and (max-width: 430px) {
        width: 100%;
        img{
            width: 150px;
        }
    }

`