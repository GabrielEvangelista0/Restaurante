import PaginaPadrao from 'components/PaginaPadrao/indec';
import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home/Home';
import Prato from 'pages/Prato';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route element={<PaginaPadrao/>}>
        <Route path='/cardapio/' element={<Cardapio/>} />
        <Route path='/prato/:id/' element={<Prato/>}/>
      </Route>
      
    </Routes>
  );
}

export default App;
