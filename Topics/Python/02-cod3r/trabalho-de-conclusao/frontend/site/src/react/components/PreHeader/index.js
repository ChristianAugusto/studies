import React from 'react';
import Link from 'next/link';
import Style from './styled';



const Component = ({ linksHeader }) => {
    return (
        <Style>
            {linksHeader.map(({ id, destination, target, text, rel }) => (
                <Link href={destination} key={id}>
                    { rel ? <a target={target} rel={rel}>{text}</a>
                        : <a target={target}>{text}</a>
                    }
                </Link>
            ))}
        </Style>
    );
};



export default Component;