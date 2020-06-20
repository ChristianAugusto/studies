export const transform = (property) => `
-webkit-transform: ${property};
-ms-transform: ${property};
-o-transform: ${property};
transform: ${property};
`;


export const transition = (property) => `
-webkit-transition: ${property};
-moz-transition: ${property};
-ms-transition: ${property};
-o-transition: ${property};
transition: ${property};
`;


export const displayRow = () => `
display: flex;
flex-direction: row;
`;


export const displayColumn = () => `
display: flex;
flex-direction: column;
`;


export const mqmin = (min) => `
@media only screen and (min-width: ${min})
`;


export const mqmax = (max) => `
@media only screen and (max-width: ${max})
`;