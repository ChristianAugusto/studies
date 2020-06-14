import React from 'react';
import Link from 'next/link';
import * as S from './styled';



const Component = ({ linksHeader }) => {
    return (
        <S.PreHeader>
            {linksHeader.map(({ id, destination, target, text, rel }) => (
                <Link href={destination} key={id}>
                    { rel ? <a target={target} rel={rel}>{text}</a>
                        : <a target={target}>{text}</a>
                    }
                </Link>
            ))}
        </S.PreHeader>
    );
};



export default Component;