import './CampoTexto.css'

function CampoTexto(props) {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className='campo__texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder= {`Preencha com ${props.label}`} />
        </div>
    )
}
// campo texto esta delegando o controle do estado para quem for usar ele
export default CampoTexto