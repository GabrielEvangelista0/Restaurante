import cardapio from 'data/cardapio.json'
import Menu from 'components/Menu'
import styled from 'styled-components'

export default function Cardapio() {
    return (
        <>
            <header>
                <Menu/>
            </header>

            <StyledCardapio>
                {cardapio.map(prato => (
                    <div className='prato' key={prato.id}>
                        <div className='imagem'><img src={prato.photo} alt={prato.title} /></div>
                        <h3>
                            {prato.title}
                        </h3>
                        <p>{prato.description}</p>
                    </div>
                ))}
            </StyledCardapio>
        </>

    )
}

const StyledCardapio = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 75%;
    margin: auto;
    padding: 2rem 0px;

    .prato{
        width: 40%;
        margin: auto;
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
    }
    
`