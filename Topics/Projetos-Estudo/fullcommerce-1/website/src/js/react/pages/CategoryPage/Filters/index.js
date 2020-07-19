import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';



const Filters = () => {
    const { filters } = useSelector(state => state.category);

    return (
        <S.FiltersWrapper>
            <h6>Filtrar</h6>
            <ul className="category__filters">
                {
                    filters ?
                        filters.map((label, index) => (
                            <li key={index}>
                                <label className="category__filter">
                                    <input type="checkbox" />
                                    {label}
                                </label>
                            </li>
                        ))
                    :
                        []
                }
            </ul>
        </S.FiltersWrapper>
    );
};



export default Filters;