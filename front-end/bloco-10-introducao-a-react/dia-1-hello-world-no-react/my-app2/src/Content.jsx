import { Component } from "react";

const conteudos = [
    {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
    },
    {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
    },
    {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
    },
    {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
    },
];

class Content extends Component {
    render() {
        return (
            <div className = 'content'>
                {conteudos.map((info) => 
                <div className = 'card'>
                    <h2>O Conteudo é: {info.conteudo}</h2>
                    <p>{`Status: ${info.status}`}</p>
                    <p>{`Bloco: ${info.bloco}`}</p>
                </div>
                )}
                
            </div>
        )
    }
}

export default Content;
