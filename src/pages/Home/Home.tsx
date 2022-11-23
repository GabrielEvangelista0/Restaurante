import Menu from "components/Menu"
import styled from "styled-components"

export default function Home(){
    return(
        <StyledHome>
            <Menu/>
          <div>
            <h1>Restaurante D'épices</h1>
            <span>
                Sempre servindo comida boa
            </span>
          </div>
        </StyledHome>
    )
}

const StyledHome = styled.div`
    @import url('../../styles/_variaveis');

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
            font-family: 'Great Vibes', cursive;
            font-weight: normal;
            font-size: 4rem;
            padding-bottom: 1.5rem;
            color: var(--cor3);
        }

        span{
            font-size: 1.5rem;
        }
    }
    
`
