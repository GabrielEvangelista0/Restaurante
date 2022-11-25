import cardapio from "data/cardapio.json"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function Prato() {
    const params = useParams()
    const prato = cardapio.filter(item => {
        return item.id === Number(params.id)
    })

    return (
        <StyledPrato>
            <img src={prato[0].photo} alt={prato[0].title} />
            <StyledDescricao>
                <h2> {prato[0].title} </h2>
                <p>
                    {prato[0].description}
                </p>
                <div className="tags">
                    <span className={prato[0].category.label.toLocaleLowerCase()}> {prato[0].category.label} </span>
                    <span> serve {prato[0].serving} pessoas </span>
                    <span> {prato[0].size}g </span>
                </div>
                <span className="price"> {prato[0].price}R$ </span>
                <button>
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