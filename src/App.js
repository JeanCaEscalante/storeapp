import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import View from './components/View';
function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<h3>Home</h3>} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<View />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
