import React from 'react';
import styled from 'styled-components'; 


const FiltersInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
`;

const FiltersContainer = styled.div`
    border: 5px solid blue;
    height: 100vh; //tela inteira
    width: 250px;
    box-sizing: border-box; //impede da pagina ter scrool (pq geralmente ela soma borda + altura)


`;

const arrayProducts= [
    {
      id: 1,
      name: "Foguete da Missão Apollo 11",
      value: 10000,
      imageUrl: "https://picsum.photos/200/200",
    },

    {
      id: 2,
      name: "Satélites antigos",
      value: 10000,
      imageUrl: "https://picsum.photos/200/200",
    },

    {
      id: 3,
      name: "Satélites antigos",
      value: 5000,
      imageUrl: "https://picsum.photos/200/200",
    }
]

function FiltroNumeros(props) {
    
    const listaFiltrada= props.lista.filter((arrayProducts) => { 
        if(arrayProducts.value > props.min ) {
            return true
        } else {
            return false
        }
    }).filter((numeros) => { 
        if(arrayProducts.value  < props.max ) {
            return true
        } else {
            return false
        }
    })

}



class Filters extends React.Component {
    state = {
            valorMinimo:" ",
            valorMaximo:" ",
            valorProduto:" "
        }
    
    onChangeMinimo = (event) => {
        this.setState({valorMinimo: event.target.value})
    }

    onChangeMaximo = (event) => {
        this.setState({valorMaximo: event.target.value})
    }

    onChangeProduto = (event) => {
        this.setState({valorProduto: event.target.value})
    }

    
        
    render() {
        return (
           
            <FiltersContainer>
                <h3>Filtros:</h3>
              
                <FiltersInput>
                    <label for="valor-minimo">Valor Mínimo:</label>
                    <input name={"Valor Mínimo:"} onChange={this.state.onChangeMinimo} value={this.state.valorMinimo} />
                    < FiltroNumeros lista={numeros} min={100} max={500} id="valor-minimo" />
                    
                    <label for="valor-maximo">Valor Máximo:</label>
                    <input name={"Valor Máximo:"} onChange={this.state.onChangeMinimo} value={this.state.valorMaximo} />
                    <FiltroNumeros lista={numeros} min={100} max={500} id="valor-maximo" />
                    
                    <label for="nome-do-produto">Nome do Produto:</label>
                    <input name={"Nome do Produto:"} onChange={this.state.onChangeProduto} value={this.state.valorMaximo} />
                    <FiltroProdutos lista={produtos} name="" id="nome-do-produto" />

                </FiltersInput>
                  
               
                
            </FiltersContainer>
        );
    }
} 

export default Filters









