import { useState } from 'react'
import Banner from "./componentes/Banner/Banner.js";
import Curso from './componentes/Curso/Curso.js';
import Formulario from "./componentes/Formulario/Formulario.js";


function App() {

  const cursos = [
    {
      nome: 'Administração', 
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Contabilidade',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Programação',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Medicina',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Veterinaria',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Marketing',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Pedagogia',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [alunos, setAlunos] = useState([])

  return (
    <div className="App">
      <Banner/>
      <Formulario cursos={cursos.map(curso =>curso.nome)} aoAlunoCadastrado={aluno => setAlunos([...alunos, aluno])}/>

      {cursos.map(curso => <Curso 
        key={curso.nome} 
        nome={curso.nome} 
        corPrimaria={curso.corPrimaria} 
        corSecundaria={curso.corSecundaria} 
        colaboradores={alunos.filter(aluno => aluno.curso === curso.nome)}
      />)}   

    </div>
  );
}

export default App;


