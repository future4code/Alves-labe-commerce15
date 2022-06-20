import React from 'react'
import styled from 'styled-components';
import Productcard from './Productcard';




const ProductsContainer = styled.div`
    border: 1px solid blue;
`;

const ProductsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

`;

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
`;



export class Products extends React.Component {
    render() {
        return <ProductsContainer>
               
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
                    <ProductsGrid>
                   {this.props.products.map((product) => {
                      return <Productcard product={product}/>
                   })} 
                  </ProductsGrid>  
                
        </ProductsContainer>
    }
}