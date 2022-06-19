import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }
  
`;



const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;


const products = [

  {
    id: 1,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200?a=1",
  },
  {
    id: 2,
    name: "Satelite",
    value: 5000.0,
    imageUrl: "https://picsum.photos/200/200?a=2",
  },
  {
    id: 3,
    name: "Traje Espacial ",
    value: 500.0,
    imageUrl: "https://picsum.photos/200/200?a=3",
  },
  {
    id: 4,
    name: "Meteorito",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200?a=4",
  }
]
 



export default class App extends React.Component {
  state = {
    minFilter: '100',
    maxFilter: '1000',
    nameFilter: 'satelite',
  }

  render() {
    return (
      <div>
      <GlobalStyle/>
        <AppContainer>
          <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          />
          <Products 
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          />
          <ShoppingCart/>
        </AppContainer>
    </div>
    )
  }
}
