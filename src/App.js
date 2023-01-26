import { useState } from 'react'
import Banner from "./componentes/Banner/Banner.js";
import Curso from './componentes/Curso/Curso.js';
import Formulario from "./componentes/Formulario/Formulario.js";


function App() {

  const [alunos, setAlunos] = useState([])

  return (
    <div className="App">
      <Banner/>
      <Formulario aoAlunoCadastrado={aluno => setAlunos([...alunos, aluno])}/>
      <Curso nome='administracao'/>
    </div>
  );
}

export default App;


