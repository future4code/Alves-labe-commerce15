import React, { Component } from 'react';
import styled from 'styled-components';


const AppContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
const filterContainer =styled.div`

  display: flex;
  flex-direction: column;
  align-items: left;
  border: 1px solid black;
  padding: 20px 10px 10px 10px;
  margin-bottom: 10px;
`;



const ProductsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`;


export default class App extends Component {
  render() {
    return (
    <AppContainer>

      <filterContainer>
      

      <ProductsHeader>
                    <p>Quantidade de produtos: 4</p>
                    <label>
                        Ordenação:
                        <select>
                            <option> Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </label>
                </ProductsHeader>
      </filterContainer>
    
    </AppContainer>
    )
  }
}
