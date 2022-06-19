import React from 'react'
import styled from 'styled-components';

const FiltersContainer = styled.div`
    border: 1px solid black;
    padding: 8px;
`;
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`

export class Filters extends React.Component {
    render() {
        return   <FiltersContainer>
            <h3>Filtros</h3>
            <div>
                <InputContainer>
                    Valor mínimo:
                    <input
                        type="number"
                        value={this.props.minFilter}
                    />
                </InputContainer>
            </div>
            <div>
                <InputContainer>
                    Valor máximo:
                    <input 
                        type="number"
                        value={this.props.maxFilter}
                    />
                </InputContainer>             
            </div>
            <div>
                <InputContainer>
                    Buscar por nome:
                    <input 
                        type="text"
                        value={this.props.nameFilter}
                    />
                </InputContainer>
            </div>
        </FiltersContainer>
    }
}