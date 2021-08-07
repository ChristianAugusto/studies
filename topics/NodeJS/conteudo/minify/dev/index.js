import axios from 'axios';
import 'regenerator-runtime';



async function getBreeds() {
    const res = await axios({
        method: 'GET',
        url: 'https://dog.ceo/api/breeds/list/all',
        headers: {
            'Accept': 'application/json'
        }
    });


    console.log(res.data);
}


getBreeds();