const app = Vue.createApp(
    {
        data()
        {
            return {
                cart: [],
                isPremium: true                
            }
        },

        methods: {
            updateCart(id)
            {
                this.cart.push(id)
            },
            removeFromCart(id)
            {
                let index = this.cart.indexOf(id);
                if (index > -1)
                {
                    this.cart.splice(index, 1);
                }
            }
        },

        computed: {
            totalCartItems()
            {
                return this.cart.length;
            }
        }
    }) 