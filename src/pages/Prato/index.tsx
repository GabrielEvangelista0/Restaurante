import cardapio from "data/cardapio.json"
import { useParams } from "react-router-dom"
import styled from "styled-components"

type typePrato = typeof cardapio[0]

export default function Prato() {
    const params = useParams()
    const pratoFiltrado = cardapio.filter(item => {
        return item.id === Number(params.id)
    })
    const prato = pratoFiltrado[0]

    function guardaPedido(prato: typePrato) {
        localStorage.setItem('pedido', JSON.stringify([
            {
                nome: '',
                telefone: '',
                endereco: {
                    bairro: '',
                    rua: '',
                    numero: ''
                },

                pratos: [ prato ]
            }
        ]))
    }

    return (
        <StyledPrato>
            <img src={prato.photo} alt={prato.title} />
            <StyledDescricao>
                <h2> {prato.title} </h2>
                <p>
                    {prato.description}
                </p>
                <div className="tags">
                    <span className={prato.category.label.toLocaleLowerCase()}> {prato.category.label} </span>
                    <span> serve {prato.serving} pessoas </span>
                    <span> {prato.size}g </span>
                </div>
                <span className="price"> {prato.price}R$ </span>
                <button
                    onClick={() => guardaPedido(prato)}
                >
                    Adcionar na sacola
                </button>
            </StyledDescricao>
        </StyledPrato>
    )
}

const StyledPrato = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    height: 100vh;
    margin: auto;

    img{
        width: 300px;
        border-radius: 25px;
        box-shadow: 3px 3px 5px rgb(0 0 0 / 10%);
    }

`

const StyledDescricao = styled.div`

    margin-top: 2rem;
    width: 50%;
    text-align: center;

    .tags{
        margin: 2rem 0;
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

    .price{
        display: block;
        font-family: 'Great Vibes', cursive;
        font-size: 3rem;
        color: var(--cor1);
        margin: 2rem 0;
    }

    button{
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