import { Outlet, Link } from 'react-router-dom';

const Productos = () => {
    return (
        <div classNmae="productos-container">
            <h1 classNmae="productos-titulo">Nuestra Tienda</h1>
            <nav className="productos-nav">
                <Link to="hombre" className="productos-link">Sección Hombre</Link>
                <Link to="mujer" className="productos-link">Sección Mujer</Link>
            </nav>
            <div className="productos-contenido">
                <Outlet />
            </div>
        </div>
    );
}
export default Productos;
