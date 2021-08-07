/*
var viewModel = {
    "name": 'Christian',
    "last-name": 'Augusto'
}

ko.applyBindings(viewModel)
*/

var viewModel = {
    name: ko.observable('Christian'),
    lastName: ko.observable('Augusto')
}

ko.applyBindings(viewModel)