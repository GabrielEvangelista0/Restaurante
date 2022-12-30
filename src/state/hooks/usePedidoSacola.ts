import { useRecoilState, useSetRecoilState } from "recoil"
import { pratosPedidosState } from "state/atom"
import typePrato from "interfaces/Pratos"
import { obterID } from "utils"
import { IPedido } from "interfaces/Pedido"

export const useAddPedidoSacola = () => {
    const [pedido, setPedido] = useRecoilState<IPedido[]>(pratosPedidosState)

    return (prato: typePrato) => {
        setPedido(listaAntiga => [...listaAntiga, { prato: prato, quantidade: 1, id: obterID() }])
        pedido.forEach(item => {
            let novalista = [...pedido];
            if (prato.id == item.prato.id) {
                if(novalista.length > 1){
                    novalista.pop()
                    novalista = [...novalista, { prato: prato, quantidade: 1, id: obterID() }]
                }
                setPedido(novalista)
            }
        })
    }
}