const app = new Vue({
    el: "#app",
    data: {
        books: [
            {
                id: 1,
                name: "《算法导论》",
                date: "2006-9",
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: "《s法导论》",
                date: "2005-9",
                price: 55.00,
                count: 1
            },
            {
                id: 3,
                name: "《a法导论》",
                date: "2004-9",
                price: 66.00,
                count: 1
            },
            {
                id: 4,
                name: "《d法导论》",
                date: "2003-9",
                price: 145.00,
                count: 1
            }
        ]
    },
    methods: {
        decrement(index) {
            this.books[index].count--;
        },
        increment(index) {
            this.books[index].count++;
        },
        removeHandle(index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice() {
            let totalPrice = 0;
            //for(let i in this.books)
            //for(let book of this.books)
            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].count * this.books[i].price;
            }
            return totalPrice;
        }
    },
    filters: {
        showPrice(price) {
            return "¥" + price.toFixed(2)
        }
    }
})