import { Outlet, Link } from 'react-router-dom';

const Productos = () => {
    return (
        <div classNmae="productos-container">
            <h1>Nuestra Tienda</h1>
            <nav>
                <Link to='hombre'>Seccion Hombre</Link>
                <Link to='mujer'>Seccion Mujer</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>
    );
}
export default Productos;
