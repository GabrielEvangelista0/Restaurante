import { useRecoilValue } from "recoil"
import { pratosPedidosState } from "state/atom"

export const useMostrarPedidos = () => {
    return useRecoilValue(pratosPedidosState)
}