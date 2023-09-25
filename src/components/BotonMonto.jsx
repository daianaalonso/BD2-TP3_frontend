import { useState } from "react";
import "./Boton.css";
import PropTypes from "prop-types";

BotonMonto.propTypes = {
  selectedProductos: PropTypes.array,
  selectedTarjeta: PropTypes.number,
};

export default function BotonMonto({ selectedProductos, selectedTarjeta }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [monto, setMonto] = useState(null);

  console.log(selectedProductos, selectedTarjeta);

  const handleClick = (e) => {
    setErrorMessage("");
    setMonto(null);

    e.preventDefault();

    fetch(
      `http://localhost:8080/venta?productos=${selectedProductos.join(
        ","
      )}&idTarjeta=${selectedTarjeta}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            setMonto(data);
          });
        } else {
          return response.json().then((data) => {
            setErrorMessage(data.error);
          });
        }
      })
      .catch((error) => console.error("Error al calcular el monto.", error));
  };

  return (
    <div>
      <button className="button buttonMonto" onClick={handleClick}>
        Monto Total
      </button>
      <div className="result-container">
        {monto && <p style={{ color: "green" }}>${monto}</p>}
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </div>
    </div>
  );
}
