import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import View from './components/View';
import Login from './pages/Login';
import Inicio from './pages/Inicio';
import Layout from './components/layouts'
function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Inicio />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<View />} />
          </Route>
          
          <Route path='/login' element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
