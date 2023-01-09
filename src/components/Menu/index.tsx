import SacolaButton from "components/SacolaButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
    const route = [
        {
            to: '/',
            label: 'Home'
        },
        {
            to: '/cardapio/',
            label: 'Cardápio'
        },
        {
            to: '/sobre/',
            label: 'Sobre'
        }

        
    ]
    return (

        <StyledMenu>
            <ul>
                {route.map((rota) => (
                    <li key={rota.label}>
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <SacolaButton/>
        </StyledMenu>

    )
}

const StyledMenu = styled.nav`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
        ul{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px;
        padding: 0px;
        list-style-type: none;
        li{
            
            padding: 0 10px;
            a{
                text-decoration: none;
                color: var(--cor0);
                font-size: 1.5rem;
                padding: 10px;
                transition: 300ms;
                
                &:hover{
                    cursor: pointer;
                    color: var(--cor3);
                    border-bottom: 1px solid var(--cor3);
                }
            }
        }
    }

    @media screen and (max-width: 900px) {
       ul{
        li{
            a{
                font-size: 1rem;
            }
        }
       }
    }
`