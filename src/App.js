import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/Formulario.js';
import Curso from './componentes/Curso/Curso.js';
import Rodape from './componentes/Rodape/Rodape.js';

function App() {

  const cursos = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Administração',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Pedagogia',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Medicina',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Contabilidade',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Nutrição',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Biologia',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [alunos, setAlunos] = useState([])

  const aoNovoAlunoAdicionado = (aluno) => {
    debugger
    setAlunos([...alunos, aluno])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario cursos={cursos.map(curso => curso.nome)} aoAlunoCadastrado={aluno => aoNovoAlunoAdicionado(aluno)}/>

      {cursos.map(curso => <Curso 
        key={curso.nome} 
        nome={curso.nome} 
        corPrimaria={curso.corPrimaria} 
        corSecundaria={curso.corSecundaria} 
        alunos={alunos.filter(aluno => aluno.curso === curso.nome)}
      />)}   

      <Rodape/>

    </div>
  );
}

export default App;

