import {useState} from "react"

const Exemplo = ({cor}) => {

    const [texto, setTexto] = useState("Teste de comparação props x states")
    return (
    <div>
        <h1 style={{color : cor}}>{texto}</h1>
        <button onClick={() => {setTexto("Texto após o clique")}}>Mudar</button>
        <button onClick={() => {setTexto("Return")}}>Mudar novamente</button>
    </div>
    )

}

export default Exemplo;