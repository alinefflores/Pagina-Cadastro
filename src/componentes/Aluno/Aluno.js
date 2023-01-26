import './Aluno.css'

const Aluno = ({ nome, imagem, sobrenome, corDeFundo }) => {
    return (
        <div className='aluno'>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{sobrenome}</h5>
            </div>
       </div>
    )   
}

export default Aluno