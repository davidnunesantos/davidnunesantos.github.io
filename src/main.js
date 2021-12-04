import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

if (process.env.NODE_ENV !== "production") {
    Vue.config.productionTip = false;
    Vue.config.devtools = true;
}

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
