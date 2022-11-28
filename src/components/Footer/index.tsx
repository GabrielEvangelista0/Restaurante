import styled from "styled-components"

export default function Footer(){
    return(
        <StyledFooter>
            <h1>D'épices</h1>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`

    background-color: var(--cor1);
    display: flex;
    align-items: center;
    justify-content: center;


`