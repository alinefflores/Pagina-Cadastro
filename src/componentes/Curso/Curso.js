import Aluno from '../Aluno/Aluno.js'
import './Curso.css'

const Curso= (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.alunos.length > 0) ? <section className='curso' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='alunos'>
                {props.alunos.map( aluno => <Aluno corDeFundo={props.corPrimaria} key={aluno.nome} nome={aluno.nome} cidade={aluno.cidade} imagem={aluno.imagem}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Curso