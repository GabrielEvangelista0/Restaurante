import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home/Home';
import { Router, Routes, Route } from 'react-router-dom';
import cardapio from './data/cardapio.json'

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cardapio/' element={<Cardapio/>} />
    </Routes>
  );
}

export default App;
