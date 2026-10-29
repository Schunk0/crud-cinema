import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Create from './components/Create';
import SearchById from './components/SearchById';
import Update from './components/Update';
import Delete from './components/Delete';
import Read from './components/Read';
import Undefined from './components/Undefined';
import Cabecalho from './components/Cabecalho';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<SearchById pageToRender={filme => <Update filme={filme} />} />} />
        <Route path="/delete" element={<SearchById pageToRender={filme => <Delete filme={filme} />} />} />
        <Route path="/read/:id" element={<Read />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;