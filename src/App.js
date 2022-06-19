import React from 'react';
import { Filters } from './components/Filters/Filters';
import { Products } from './components/Products/Products';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart';
import styled from 'styled-components';


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
    imageUrl: "https://picsum.photos/100/200?a=3",
  },
  {
    id: 3,
    name: "Traje Espacial ",
    value: 500.0,
    imageUrl: "https://picsum.photos/200/200?a=4",
  },
  {
    id: 4,
    name: "Meteorito",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200?a=5",
  }
]
 


export default function App() {
  return (
    <AppContainer>
        <Filters/>
        <Products products={products} />
        <ShoppingCart/>
    </AppContainer>
  )
}
