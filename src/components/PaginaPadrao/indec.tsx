import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Menu from "components/Menu";
import Footer from "components/Footer";
import './index.css'

export default function PaginaPadrao() {
    
    return (
        <div>
            <Header>
                <h1>D'épices</h1>
                <Menu/>
            </Header>
            <main className="conteudo">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

const Header = styled.header`
 background-color: var(--cor1);
 padding: 1rem;
 display: flex;
 align-items: center;
 justify-content: center;

 h1{
    position: absolute;
    left: 20%;
 }

 @media screen and (max-width: 768px) {
    h1{
        display: none;
    }
 }

`