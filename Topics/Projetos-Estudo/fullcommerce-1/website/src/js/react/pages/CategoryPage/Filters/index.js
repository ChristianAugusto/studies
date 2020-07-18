import React from 'react';
import { useSelector } from 'react-redux';

import * as S from './styled';



const Filters = () => {
    const { filters } = useSelector(state => state.category);

    return (
        <S.FiltersWrapper>
            <ul className="category__filters">
                {
                    filters ?
                        filters.map((label, index) => (
                            <li key={index}>
                                <label className="category__filter">
                                    {label}
                                    <input type="checkbox" />
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