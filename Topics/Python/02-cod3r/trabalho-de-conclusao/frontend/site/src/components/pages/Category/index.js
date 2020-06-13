import React, { useState, useEffect } from 'react';



const Component = ({ category }) => {

    


    return (
        <section>
            <h1>{JSON.stringify(category)}</h1>
        </section>
    );
};


export const getCategoriesToParams = async () => {
    const reponse = await fetch('http://localhost:5000/api/categories?fields=slug');
    const resJson = await reponse.json();

    return resJson.data;
};



export default Component;