<template>
    <v-app>
        <v-app-bar
            app
            flat
            style="background-color: #2B2D42;"
            elevation="1"
        >
            <v-tabs
                v-model="tab_selected"
                centered
                class="ml-n9"
                dark
            >
                <v-tab v-for="(link, n) in links" :key="n" :to="link.href">
                    <v-icon left>{{ link.icon }}</v-icon> {{ link.name }}
                </v-tab>
            </v-tabs>
        </v-app-bar>
        <v-main style="background-color: #F4F4F9;">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" lg="3" xl="2">
                        <the-profile></the-profile>
                    </v-col>
                    <v-col cols="12" md="8" lg="9" xl="10">
                        <v-sheet min-height="70vh" rounded="lg">
                            <router-view></router-view>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import TheProfile from "./components/TheProfile"

export default {
    components: {
        TheProfile
    },
    data() {
        return {
            tab_selected: "about",
            links: {
                about: {
                    name: "Sobre",
                    href: "/",
                    icon: "mdi-account-tie"
                },
                experiences: {
                    name: "Experiências",
                    href: "/experiences",
                    icon: "mdi-briefcase"
                },
                projects: {
                    name: "Projetos",
                    href: "/projects",
                    icon: "mdi-projector-screen"
                },
                education: {
                    name: "Formação e Cursos",
                    href: "/education",
                    icon: "mdi-book-education"
                }
            }
        };
    }
};
</script>

<style>
.v-main {
    background-color: #F4F4F9;
    /* background: url("./assets/new_background.png"); */
}
</style>