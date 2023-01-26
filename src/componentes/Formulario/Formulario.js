import { userState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa.js'
import Botao from '../Botao/Botao.js'

const Formulario = () => {
    const cursos = ['administração', 'contabilidade', 'programação']

    const [nome, setNome] = useState('')
    const [cidade, setCidade] = useState('')
    const [imagem, setImagem] = useState('')
    const [curso, setCurso] = useState('')
   

    const aoSalvar = (evento) => {
        evento.preventDefault()
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados dos alunos</h2>
                
                <CampoTexto obrigatorio={true} label='Nome' valor={nome} aoAlterado={valor => setNome(valor)}/>

                <CampoTexto obrigatorio={true} label='Cidade' valor={cidade} aoAlterado={valor => setCidade(valor)} />

                <CampoTexto label='Imagem' valor={imagem} aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa obrigatorio={true} label='Cursos' itens={cursos} valor={curso} aoAlterado={valor => setCurso(valor)}/>

                <Botao>Cadastrar</Botao>
            </form>
        </section>

    )
}

export default Formulario