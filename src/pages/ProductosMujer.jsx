import { Link } from 'react-router-dom';

export default function ProductosMujer() {
    const productos = ['blusa-rosa', 'falda-corta', 'tacones-cuero'];

    return (
    <div>
        <h3>Catálogo Femenino</h3>
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