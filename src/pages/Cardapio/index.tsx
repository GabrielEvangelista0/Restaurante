import cardapio from 'data/cardapio.json'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function Cardapio() {

    const navagate = useNavigate()

    return (

        <StyledCardapio>
            {cardapio.map(prato => (
                <StyledPrato className='prato' key={prato.id} onClick={() => navagate(`/prato/${prato.id}`)} >
                    <img src={prato.photo} alt={prato.title} />
                    <h3>
                        {prato.title}
                    </h3>
                    <p>{prato.description}</p>
                    <div className='tags-price'>
                        <div className='tags'>
                            <span className={prato.category.label.toLocaleLowerCase()} > {prato.category.label} </span>
                            <span> serve {prato.serving} pessoas </span>
                            <span> {prato.size}g </span>
                        </div>
                        <span className='price'> {prato.price}R$ </span>
                    </div>
                </StyledPrato>
            ))}
        </StyledCardapio>


    )
}

const StyledCardapio = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 75%;
    padding: 2rem 0px;

    @media screen and (max-width: 860px){
        flex-direction: column;
        align-items: center;
        width: 100vw;
    }
    
`

const StyledPrato = styled.div`
        width: 45%;
        margin: 1rem;
        padding: 1rem;
        text-align: center;
        border-bottom: 1px solid var(--cor3);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transition: 300ms;
        &:hover{
            background-color: var(--cor3);
            border-radius: 20px;
            cursor: pointer;
            color: white;
        }
        p{
            text-align: justify;
        }

        img{
            width: 55%;
            border-radius: 25px;
            box-shadow: 3px 3px 5px rgb(0 0 0 / 10%);
        }
        .tags-price{
            display: flex;
            justify-content: space-evenly;
            align-items: flex-end;

            .tags{
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
                font-family: 'Great Vibes', cursive;
                font-size: 2rem;
                font-weight: bold;
            }
        }

        @media screen and (max-width: 1024px) {
            .tags-price{
                margin-top: 1rem;
                display: block;
                .tags{
                font-size: .9rem;
                margin-bottom: 1rem;
                }
            }
        }

        @media screen and (max-width: 860px) {
            width: 80vw;
        }

        @media screen and (max-width: 396px) {
            .tags{
                span{
                    font-size: 0.7rem;
                }
            }
        }

`

