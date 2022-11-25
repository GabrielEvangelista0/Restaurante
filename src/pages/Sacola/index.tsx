export default function Sacola(){
    const pedido = JSON.parse(localStorage.getItem('pedido') || '')
    const prato = pedido[0].prato

    console.log(pedido[0])
    return(
        <section>
            <img src={prato.photo} alt="" />
            {prato.title}
        </section>
    )
}