app.component('product-details', {
    props: {
        details: {}
    },
    template: /*html*/
        `<ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>`,
    data() {
        return {};
    },
    computed: {       
    }
})