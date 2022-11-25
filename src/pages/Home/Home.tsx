import Menu from "components/Menu"
import SacolaButton from "components/SacolaButton"
import styled from "styled-components"

export default function Home() {
    return (
        <StyledHome>
            
            <Menu />
            <div>
                <h1>Restaurante D'épices</h1>
                <span>
                    Sempre servindo comida boa.
                </span>
            </div>
        </StyledHome>
    )
}

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

    div{
        text-align: center;

    h1{
        border-bottom: 2px solid var(--cor3);
        font-size: 4rem;
        padding-bottom: 1.5rem;
    }

        span{
            font-size: 1.5rem;
        }
    }
    
`
