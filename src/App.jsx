import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import ProductosHombre from './pages/ProductosHombre';
import ProductosMujer from './pages/ProductosMujer';
import DetalleProducto from './pages/DetalleProducto';
import './App.css';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path='/contactos' element={<Contacto />} />
        <Route path='/productos' element={<Productos />}>
        <Route path='hombre' element={<ProductosHombre />} />
        <Route path='mujer' element={<ProductosMujer />} />
        <Route path='detalle/:id' element={<DetalleProducto />} />
      </Route>
      </Route>
    </Routes>
  );
}

export default App
