const { ObjectId } = require('mongodb');
const create = require('./methods/create');
const read = require('./methods/read');
const update = require('./methods/update');
const $delete = require('./methods/delete');



function stressTestFindAll() {
    for (let i = 0; i < 5; i++) {
        read.findAll();
        read.findAll();
        read.findAll();
        read.findAll();
    }
}

function stressTestCreate() {
    for (let i = 0; i < 5; i++) {
        create.create();
        create.create();
        create.create();
        create.create();
    }
}

async function main() {
    // read.findAll();
    // read.findOne();
    // create.create();
    // update.update();
    // $delete.deleteOne();

    // stressTestFindAll();
    // stressTestCreate();
}



main();
