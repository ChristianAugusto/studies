import React from 'react';
import Link from 'next/link';
import Style from './styled';



const Component = ({ categories }) => {
    return (
        <Style>
            <Link href="/"><a>Home</a></Link>
            {categories.map(({ id, name, slug }) => (
                <Link href={`/${slug}`} key={id}>
                    <a>{name}</a>
                </Link>
            ))}
        </Style>
    );
};



export default Component;