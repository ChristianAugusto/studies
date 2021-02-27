const create = require('./methods/create');
const read = require('./methods/read');



function createStressTest() {
    for (let i = 0; i < 5; i++) {
        create.create();
        create.create();
        create.create();
        create.create();
    }
}

function readStressTest() {
    for (let i = 0; i < 5; i++) {
        read.read();
        read.read();
        read.read();
        read.read();
    }
}

async function main() {
    // create.create();
    read.read();

    // readStressTest();
    // createStressTest();
}



main();
