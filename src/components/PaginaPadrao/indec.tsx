import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Menu from "components/Menu";

export default function PaginaPadrao() {
    
    return (
        <div>
            <Header>
                <h1>D'épices</h1>
                <Menu/>
            </Header>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

const Header = styled.header`
 background-color: var(--cor1);
 padding: 1.5rem;
 display: flex;
 align-items: center;
 justify-content: center;

 h1{
    position: absolute;
    top: 1px;
    right: 70vw;
 }

`