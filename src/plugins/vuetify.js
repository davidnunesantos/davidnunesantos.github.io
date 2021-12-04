import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                "light-grey": "#F3F3F3",
                "grey": "#DDDADA",
                "dark-grey": "#8b8a8a",
                "light-green": "#D2E7C1",
                "green": "#C9E265"
            }
        }
    }
});
