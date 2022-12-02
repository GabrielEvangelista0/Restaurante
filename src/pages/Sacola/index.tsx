<<<<<<< HEAD
import styled from "styled-components"
import cardapio from 'data/cardapio.json'

export default function Sacola() {
=======
export default function Sacola(){
>>>>>>> parent of e9fd986 (Comecei os pedidos da sacola)
    const pedido = JSON.parse(localStorage.getItem('pedido') || '')
    const pratos = pedido[0].pratos 
    

<<<<<<< HEAD
    console.log(pratos)
    return (
        <StyledSacola>
                {pratos.map(prato => (
                    <div>
                        <img src={prato.photo} alt="" />
                        <div className="descricao">
                            <h3> {prato.title} </h3>
                            <div className="tags">
                                <span className={prato.category.label.toLocaleLowerCase()}> {prato.category.label} </span>
                                <span> serve {prato.serving} pessoas </span>
                                <span> {prato.size}g </span>
                            </div>
                            <span className="price"> {prato.price}R$ </span>
                        </div>
                    </div>
                ))}
        </StyledSacola>
=======
    console.log(pedido[0])
    return(
        <section>
            <img src={prato.photo} alt="" />
            {prato.title}
        </section>
>>>>>>> parent of e9fd986 (Comecei os pedidos da sacola)
    )
}