import React from 'react';
import * as Action from '../flux/CalculadoraActions';

/**
 * Componente Botao que renderiza um input e chama as actions
 * conforme sua respectiva função na calculadora
 */

export default class Botao extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        
        return (
            <input type={this.props.type} value={this.props.value}
                onClick={this.click.bind(this)}
            />
        )
    }
    /**
     * função para tratar os cliques nos botões e chamar as actions, 
     * fazendo a calculadora funcionar
     */
    click(e){
        switch(this.props.value){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':             
                Action.atualizarVisor(
                    this.props.valorVisor,
                    this.props.value,
                    this.props.limparNaProximaOperacao,
                    this.props.entradaDecimal
                )
                break;
            case 'pi':
                Action.atualizarVisor(
                    this.props.valorVisor,
                    this.props.value,
                    this.props.limparNaProximaOperacao,
                    this.props.entradaDecimal
                )
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '=':
                Action.executarOperacaoMatematica(
                    this.props.value,
                    this.props.operacaoAnterior,
                    this.props.valorVisor,
                    this.props.valorNaMemoria
                )
                break;
            case '.':
                Action.setModoDeEntradaDecimal(true)
                break;
            case 'C':
                Action.resetar();
                break;
        }
    }
}