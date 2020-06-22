document.addEventListener('DOMContentLoaded', () => {
    function setViewModel() {
        window.viewModel = {
            breeds: ko.observable([]),
            breedActive: ko.observable('')
        }
        ko.applyBindings(window.viewModel)
    }


    async function getBreeds() {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const { message } = await response.json()

        const allBreeds = Object.keys(message)

        window.viewModel.breeds( allBreeds.map(breed => ({ breedName: breed })) )

        window.viewModel.breedActive(allBreeds[0])
    }


    function setSelectActions() {
        document.querySelector('select#breeds').onchange = function() {
            window.viewModel.breedActive(this.value)
        }
    }


    setViewModel()
    setSelectActions()
    getBreeds()
})