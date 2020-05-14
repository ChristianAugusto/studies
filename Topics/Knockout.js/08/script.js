document.addEventListener('DOMContentLoaded', () => {
    function formatPrice(value) {
        return `R$ ${value.toFixed(2)}`
    }

    function unformatPrice(string) {
        return +string.replace(/\D/gmi, '') / 100
    }

    function viewModel() {
        const self = this;

        self.shelf = {
            products: ko.observable([]),
            sendToCart(product) {
                const cart = [...self.cart.items()] // Copying actual cart to a new array

                if (cart.filter(item => item.id == product.id).length > 0) {
                    alert('Item já adicionado')
                    return
                }

                cart.push(product)

                const newPrice = cart.reduce((acc, item) => acc += item.price, 0)
                self.cart.subTotal(formatPrice(newPrice))

                self.cart.items(cart)
            }
        }

        self.cart = {
            items: ko.observable([]),
            subTotal: ko.observable('R$ 0,00'),
            removeItem({ id, price }) {
                const oldCart = [...self.cart.items()]

                const newCart = oldCart.filter(item => item.id != id)

                const oldPrice = unformatPrice(self.cart.subTotal())
                self.cart.subTotal(formatPrice(oldPrice - price))

                self.cart.items(newCart)
            }
        }

        self.getProducts = () => {
            self.shelf.products([
                {
                    id: 1,
                    name: "Batata",
                    price: 0.90,
                    quantityStock: 500
                },
                {
                    id: 2,
                    name: "Cenoura",
                    price: 1.20,
                    quantityStock: 100
                },
                {
                    id: 3,
                    name: "Rabanete",
                    price: 1.90,
                    quantityStock: 70
                },
                {
                    id: 4,
                    name: "Beterraba",
                    price: 1.70,
                    quantityStock: 90
                },
                {
                    id: 5,
                    name: "Cebola",
                    price: 0.95,
                    quantityStock: 700
                }
            ])
        }
    }


    ko.applyBindings(new viewModel())
})