const app = Vue.createApp({
    // template: '<h2>Hello mathias </h2>',

    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author : 'Brandon Sanderson',
            age: 45

        }
    },
    methods: {
        changeTitle(title) {
            
            //this.title = 'Words of Radiance'
            this.title = 'words of radiance'
        },
        ToggleShowBooks() {
            this.showBooks = !this.showBooks
        }
        
    }
})

app.mount('#app')
