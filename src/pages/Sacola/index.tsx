import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { pratosPedidosState } from "state/atom"
import styled from "styled-components"
import { SlArrowDown, SlArrowUp } from "react-icons/sl"

export default function Sacola() {

    const navegate = useNavigate()
    const pedidos = useRecoilValue(pratosPedidosState)

    return (
        <section>

            <PratosSacola>
                {pedidos.map(pedido => (
                    <StyledPrato key={pedido.prato.title}>
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
                                Qtd: <input type="number" value={pedido.quantidade} />
                                <div className="setas">
                                    <SlArrowUp />
                                    <SlArrowDown />
                                </div>
                            </div>
                        </div>
                    </StyledPrato>
                ))}
            </PratosSacola>

            <button>Finalizar Pedido</button>
        </section>
    )
}

const PratosSacola = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem;
    width: 70%;
    margin: auto;

`

const StyledPrato = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 40%;
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
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input{
            width: 30px;
            border: none;
            text-align: center;
            cursor: default;
        }

        .setas{
            display: flex;
            flex-direction: column;
            color: var(--cor3);
        }
    }


`