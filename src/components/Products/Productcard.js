import React, { Component } from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;

`;

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;

    p {
        margin : 4px 0;
    }
`;

const AddTocartButton = styled.button`
    align-self : center;
    margin-top : 4px


`

export default class Productcard extends Component {
  render() {
    const product = this.props.product
    
    return <CardContainer>
      <img src={product.imageUrl} alt=""/>
      <CardInfo>
        <p>{product.name}</p>
        <p>R${product.value}</p>
        <AddTocartButton>Adicionar ao carrinho</AddTocartButton>
      </CardInfo>
     </CardContainer>
    
  }
}
