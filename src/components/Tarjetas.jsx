import { useEffect, useState } from "react";
import Tarjeta from "../domain/Tarjeta";
import "./Tarjetas.css";
import PropTypes from "prop-types";

Tarjetas.propTypes = {
  selectedTarjeta: PropTypes.number,
  setSelectedTarjeta: PropTypes.func,
};

export default function Tarjetas({ selectedTarjeta, setSelectedTarjeta }) {
  const [tarjetas, setTarjetas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/cliente?id=1")
      .then((response) => response.json())
      .then((json) => {
        const tarjetas = json.map((item) => new Tarjeta(item.id, item.nombre));
        setTarjetas(tarjetas);
      })
      .catch((error) =>
        console.error("Error al cargar las tarjetas del cliente:", error)
      );
  }, []);

  const handleTarjetaSelect = (idTarjeta) => {
    setSelectedTarjeta(parseInt(idTarjeta));
  };

  return (
    <div>
      <select
        onChange={(e) => handleTarjetaSelect(e.target.value)}
        value={selectedTarjeta}
      >
        <option value={0}>Seleccionar una tarjeta</option>
        {tarjetas.map((t) => (
          <option key={t.id} value={t.id}>
            {t.nombre}
          </option>
        ))}
      </select>
    </div>
  );
}
