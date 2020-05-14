var myViewModel = {
    personName: ko.observable('Christian'),
    personAge: ko.observable(19)
}

ko.applyBindings(myViewModel) // Ativa o KO

function foo() {
    myViewModel.personName('bob')
}