import React from 'react'
import styled from 'styled-components';

const FiltersContainer = styled.div`
    border: 1px solid black;
`;

export class Filters extends React.Component {
    render() {
        return <FiltersContainer>
            <h3>Filtros</h3>
            <div>
                <label>
                    Valor mínimo:
                    <input type="number"/>
                </label>
            </div>
            <div>
                <label>
                    Valor máximo:
                    <input type="number"/>
                </label>
            </div>
            <div>
                <label>
                    Buscar por nome:
                    <input type="text"/>
                </label>
            </div>
        </FiltersContainer>
    }
}