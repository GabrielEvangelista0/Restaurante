import styled from "styled-components"

export default function Sacola() {
    const pedido = JSON.parse(localStorage.getItem('pedido') || '')
    const prato = pedido[0].prato


    console.log(prato)
    return (
        <StyledSacola>
            <StyledPrato>
                <img src={prato.photo} alt="" />
                <div className="descricao">
                    <h3> {prato.title} </h3>
                    <div className="tags">
                        <span className={prato.category.label.toLocaleLowerCase()}> {prato.category.label} </span>
                        <span> serve {prato.serving} pessoas </span>
                        <span> {prato.size}g </span>
                    </div>
                    <span className="price"> {prato.price}R$ </span>
                </div>
            </StyledPrato>
        </StyledSacola>
    )
}

const StyledSacola = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;

`

const StyledPrato = styled.div`

    width: 40%;
    margin-top: 2rem;
    border: 2px solid var(--cor1);
    border-radius: 25px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    img{
        border-radius: 25px;
        box-shadow: 3px 3px 5px rgb(0 0 0 / 10%)
    }

    .descricao{
        text-align: center;
        
            .tags{
            margin: 2rem 0;

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

        .price{
        display: block;
        font-family: 'Great Vibes', cursive;
        font-size: 3rem;
        color: var(--cor1);
        margin: 2rem 0;
        }

    }

    

`