import { useState } from "react";
import styles from "./Formulario.module.css";

const Form = () => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [exibeResposta, setExibeResposta] = useState(true);

  const calculaIMC = () => {
    const imc = peso / (altura * altura);

    if (imc <= 18) {
      return <p>Magreza</p>;
    }
    if ((imc > 18) & (imc <= 24.9)) {
      return <p>Normal</p>;
    }
    if ((imc > 24.9) & (imc <= 29.9)) {
      return <p>Sobrepeso</p>;
    }
    if ((imc > 29.9) & (imc <= 39.9)) {
      return <p>Obesidade</p>;
    }
    if (imc > 39.9) {
      return <p>Obesidade grave</p>;
    }
  };

  return (
    <form className={styles.form}>
      <h1>Calculadora IMC</h1>
      <div className={styles.altura}>
        <p>Altura(ex: 1.82)</p>
        <input
          onChange={(e) => {
            setAltura(e.target.value);
          }}
          type="number"
          placeholder="Metros"
        />
      </div>
      <div className={styles.peso}>
        <p>Peso(ex: 82)</p>
        <input
          onChange={(e) => {
            setPeso(e.target.value);
          }}
          type="number"
          placeholder="Quilos"
        />
      </div>
      <div>
        <button
          onClick={(e) => {
            setExibeResposta(!exibeResposta);
          }}
          className={styles.button}
          type="button"
        >
          Calcular
        </button>
      </div>
      {exibeResposta ? (
        ""
      ) : (
        <>
          <h2>Sua classificação é: {calculaIMC()}</h2>
        </>
      )}
    </form>
  );
};

export default Form;
