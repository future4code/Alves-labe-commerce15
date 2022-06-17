import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
  flex-direction: column;
  padding: 18px 0;
`
const RemoverCarrinho = styled.section` 
    display: grid;
    grid-template-columns: 28% 41% 41%;
    justify-items: center;

`
const TituloCarrinho = styled.section`
    font-weight: bold; 
    padding-bottom: 8px;

`


export class Carrinho extends React.Component () {
    
    state = {

         arrayProducts:[{
         id: '',
         name: '',
         value: '',
        }]
    
    }

  

 
    render () {
        return (
           <ContainerCarrinho>
            <TituloCarrinho>
            <h3>Carrinho: </h3>
            </TituloCarrinho>
            <RemoverCarrinho>
                <p>"1"</p>
                <p>Produto x</p>
                <button>Remover</button>
            </RemoverCarrinho>
            <RemoverCarrinho>
                <p>"1"</p>
                <p>Produto x</p>
                <button>Remover</button>
            </RemoverCarrinho>
            <section>
            <p>Valor total: R${this.nomeDaFuncao()},00</p>
            </section>
            </ContainerCarrinho>
        );

    }
    
}