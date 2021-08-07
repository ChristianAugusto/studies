var viewModel = {
    registros: [
        {
            id: 1,
            name: "Batata",
            quantityStock: 500
        },
        {
            id: 2,
            name: "Cenoura",
            quantityStock: 100
        },
        {
            id: 3,
            name: "Rabanete",
            quantityStock: 70
        },
        {
            id: 4,
            name: "Beterraba",
            quantityStock: 90
        },
        {
            id: 5,
            name: "Cebola",
            quantityStock: 700
        }
    ]
}

ko.applyBindings(viewModel)