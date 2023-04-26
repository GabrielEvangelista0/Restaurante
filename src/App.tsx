import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import FinalizarPedido from 'pages/FinalizarPedido';
import Home from 'pages/Home/Home';
import Prato from 'pages/Prato';
import Sacola from 'pages/Sacola';
import Sobre from 'pages/Sobre';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route element={<PaginaPadrao/>}>
        <Route path='/cardapio/' element={<Cardapio/>} />
        <Route path='/prato/:id/' element={<Prato/>}/>
        <Route path='/sacola/' element={<Sacola/>}/>
        <Route path='/finalizar-pedido/' element={<FinalizarPedido/>}/>
        <Route path='/sobre/' element={<Sobre/>} />
      </Route>
      
    </Routes>
  );
}

export default App;
