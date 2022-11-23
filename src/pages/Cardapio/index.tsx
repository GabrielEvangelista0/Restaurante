import cardapio from 'data/cardapio.json'
import Menu from 'components/Menu'
import styled from 'styled-components'

export default function Cardapio() {
    return (
        <>
            <Header>
                <Menu />
            </Header>

            <StyledCardapio>
                {cardapio.map(prato => (
                    <StyledPrato className='prato' key={prato.id}>
                        <img src={prato.photo} alt={prato.title} />
                        <h3>
                            {prato.title}
                        </h3>
                        <p>{prato.description}</p>
                    </StyledPrato>
                ))}
            </StyledCardapio>
        </>

    )
}

const StyledCardapio = styled.div`
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 75%;
    padding: 2rem 0px;
    
`

const StyledPrato = styled.div`
        width: 40%;
        margin: 1rem;
        padding: 1rem;
        text-align: center;
        border-bottom: 1px solid var(--cor3);
        &:hover{
            background-color: var(--cor3);
            border-radius: 20px;
            cursor: pointer;
        }
        p{
            text-align: justify;
        }

        img{
            border-radius: 25px;
            box-shadow: 3px 3px 5px rgb(0 0 0 / 10%);
        }
`

const Header = styled.header`
 background-color: var(--cor1);
 padding: 1.5rem;
 display: flex;
 align-items: center;
 justify-content: center;
`