import Cardapio from 'pages/Cardapio';
import Home from 'pages/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cardapio/' element={<Cardapio/>} />
    </Routes>
  );
}

export default App;
