export const placeholder = (color, opacity = 1) => `
    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: ${color};
        opacity: ${opacity};
    }

    &::-moz-placeholder { /* Firefox 19+ */
        color: ${color};
        opacity: ${opacity};
    }

    &:-ms-input-placeholder { /* IE 10+ */
        color: ${color};
        opacity: ${opacity};
    }

    &:-moz-placeholder { /* Firefox 18- */
        color: ${color};
        opacity: ${opacity};
    }
`;


export const mq = (max, min) => `
    @media only screen and (min-width: ${min}px) and (max-width: ${max}px)
`;


export const mqmin = (min) => `
    @media only screen and (min-width: ${min}px)
`;


export const mqmax = (max) => `
    @media only screen and (max-width: ${max}px)
`;


export const displayRow = () => `
    display: flex;
    flex-direction: row;
`;


export const displayColumn = () => `
    display: flex;
    flex-direction: column;
`;


export const displayRowReverse = () => `
    display: flex;
    flex-direction: row-reverse;
`;


export const displayColumnReverse = () => `
    display: flex;
    flex-direction: column-reverse;
`;