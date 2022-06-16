import React from 'react';
import styled from 'styled-components'; 


export class Filters extends React.Component {

    state = {
        valorMinimo: "",
        valorMaximo: "",
        valorNome: ""
    }

    onChangeMinimo = (event) => {
        this.setState({valorMinimo: event.target.value})
    }

    onChangeMaximo = (event) => {
        this.setState({valorMaximo: event.target.value})
    }

    onChangeNome = (event) => {
        this.setState({valorNome: event.target.value})
    }
    
    render() {
        return (
            <div>
                <h3>Filtros:</h3>  
                <input name={"Valor Mínimo"} onChange={this.onChangeMinimo} value={this.state.valorMinimo} />
                <input name={"Valor Máximo"} onChange={this.onChangeMaximo} value={this.state.valorMaximo} />
                <input name={"Nome do Produto"} onChange={this.onChangeNome} value={this.state.valorNome} />

            </div>
        );
    }
} 










