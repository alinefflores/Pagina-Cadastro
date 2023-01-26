import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa.js'
import Botao from '../Botao/Botao.js'

const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [imagem, setImagem] = useState('')
    const [curso, setCurso] = useState('')
   

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoAlunoCadastrado({nome, sobrenome, imagem, curso})

        setNome('')
        setSobrenome('')
        setImagem('')
        setCurso('')
    }

    

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Cadastro dos Alunos - Ano de 2023</h2>
                
                <CampoTexto obrigatorio={true} label='Nome' placeholder='Digite seu nome'valor={nome} aoAlterado={valor => setNome(valor)}/>

                <CampoTexto obrigatorio={true} label='Sobrenome' placeholder='Digite seu sobrenome' valor={sobrenome} aoAlterado={valor => setSobrenome(valor)} />

                <CampoTexto label='Imagem' placeholder='https://github.com/PERFIL.png' valor={imagem} aoAlterado={valor => setImagem(valor)}/>

                <ListaSuspensa obrigatorio={true} label='Curso' itens={props.cursos} valor={curso} aoAlterado={valor => setCurso(valor)}/>

                <Botao>Cadastrar</Botao>
            </form>
        </section>

    )
}

export default Formulario