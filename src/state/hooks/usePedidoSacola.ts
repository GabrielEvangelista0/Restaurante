import { useSetRecoilState } from "recoil"
import { pratosPedidosState } from "state/atom"
import typePrato from "interfaces/Pratos"
import { obterID } from "utils"

export const useAddPedidoSacola = () => {
    const setPedido = useSetRecoilState(pratosPedidosState)

    return (prato: typePrato) => {
        setPedido(listaAntiga => [{prato: prato, quantidade: 1, id: obterID( )}, ...listaAntiga])
    }
}