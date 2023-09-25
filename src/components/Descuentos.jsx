import { useEffect, useState } from "react";
import "./Descuentos.css";

export default function Descuentos() {
  const [descuentos, setDescuentos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/promocion")
      .then((response) => response.json())
      .then((json) => setDescuentos(json))
      .catch((error) =>
        console.error("Error al cargar las promociones:", error)
      );
  }, []);

  return (
    <div>
      <table className="descuentos">
        <thead>
          <tr>
            <th>Inicia</th>
            <th>Finaliza</th>
            <th>Tipo de descuento</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {descuentos.map((d) => {
            return (
              <tr key={d.id}>
                <td>{d.fechaInicio}</td>
                <td>{d.fechaFin}</td>
                <td>{d.descripcion}</td>
                <td>{d.porcentaje * 100}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
