import { useState, FormEvent } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [idade, setIdade] = useState<number>(0);
  const [info, setInfo] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const anoAtual = new Date().getFullYear()
    const idadeUsario = anoAtual - idade

    setInfo(`Olá, ${name}, você tem ${idadeUsario} anos`)
  }

  return (
    <div className="App">
      <section className="container">
        <h1>Descubra sua idade</h1>

        <form onSubmit={handleSubmit}>
          <label>Digite seu nome:</label>
          <input
            type="text"
            placeholder="Digite aqui"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Digite o ano que você nasceu:</label>
          <input
            type="text"
            placeholder="Digite aqui"
            value={idade}
            onChange={(e) => setIdade(Number(e.target.value))}
          />

          <input 
          type="submit" 
          value="Enviar" 
          />
        </form>

        {info !== "" && <h2>{info}</h2>}
      </section>
    </div>
  );
}

export default App;
