import { useParams } from 'react-router-dom';

export default function DetalleProducto() {
    const { id } = useParams();

    return (
        <div>
            <h2>Detalle del producto</h2>
            <p>Estas viendo la informacion detallada del producto: <strong>{id}</strong></p>
        </div>
    );
}