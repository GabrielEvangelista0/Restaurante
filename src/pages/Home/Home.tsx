import Menu from "components/Menu"
import styled, { keyframes } from "styled-components"

export default function Home() {
    return (
        <StyledHome>
            
            <Menu />
            <div className="texto-home">
                <h1>Restaurante D'épices
                    <span className="linha"></span>
                </h1>
                <span>
                    Sempre servindo comida boa.
                </span>
            </div>
        </StyledHome>
    )
}

const animacaoLinha = keyframes`

    0%{
        width: 0%;
    }

    100%{
        width: 100%;
        
    }

`

const StyledHome = styled.div`
    color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('assets/anise-aroma-art-bazaar-277253.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    .texto-home{
        text-align: center;

    h1{
        
        font-size: 4rem;
        padding-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .linha{
            display: block;
            width: 100%;
            border-bottom: 2px solid var(--cor3);
            height: 5px;
            animation-name: ${animacaoLinha};
            animation-duration: 2s;
        }
    }

        span{
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 430px) {
        .texto-home{
            h1{
                font-size: 2.5rem;
            }
            span{
                font-size: 1rem;
            }
        }
    }
    
`
