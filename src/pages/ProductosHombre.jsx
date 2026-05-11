import { Link } from 'react-router-dom';

export default function ProductosHombre() {
    const productos = ['camisa-azul', 'pantalon-jean', 'chaqueta-cuero'];

    return (
    <div>
        <h3>Catálogo Masculino</h3>
        <ul>
        {productos.map(item => (
            <li key={item}>
            <Link to={`/productos/detalle/${item}`}>Ver {item}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
}