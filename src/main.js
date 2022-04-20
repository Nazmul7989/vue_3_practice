import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from "@/components/dynamicComponent/Contact";

const app = createApp(App);

app.component('Contact',Contact);

// app.directive('custom',{
//     created(el){
//         el.innerHTML = 'This global custom directive'
//     }
// })

app.directive('custom',{
    created(el,binding){
        el.innerHTML = binding.value
        el.style.color = 'red'
    }
})

app.mount('#app');
