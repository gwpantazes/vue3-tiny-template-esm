import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

const app = createApp({
    data() {
        return {
            message: "banana"
        }
    },
    methods: {
        testMethod() {
            return this.message + "!";
        }
    }
})
app.mount('#app')
