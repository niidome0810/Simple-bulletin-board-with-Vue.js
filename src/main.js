import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBsYaSK9Ux1xYDWa60jB4_Nm-tN1TO9p64",
  authDomain: "boad-vue.firebaseapp.com",
  databaseURL: "https://boad-vue.firebaseio.com",
  projectId: "boad-vue",
  storageBucket: "boad-vue.appspot.com",
  messagingSenderId: "447251447354",
  appId: "1:447251447354:web:9fbfd453d60b4885f17f03",
  measurementId: "G-3DERKYEKSE"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')





/* eslint-disable no-new */
new Vue({    
  render: h => h(App)
})
