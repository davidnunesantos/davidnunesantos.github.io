<template>
    <v-container class="pa-5">
        <v-row class="mb-5">
            <v-col>
                <v-row>
                    <v-col>
                        <span class="text-h4">Formação</span>
                    </v-col>
                </v-row>
                <v-row align="center">
                    <v-col cols="auto">
                        <v-avatar size="80">
                            <v-img src="../../assets/education/logo_uniandrade.png"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col>
                        <v-row>
                            <v-col class="pb-0">
                                <span class="text-h5 font-weight-bold">Centro Universitário Campos de Andrade UNIANDRADE</span>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col cols="auto">
                                <span class="text-subtitle-1">Bacharelado, Ciência da Computação</span>
                            </v-col>
                            <v-col>
                                <span class="text-caption">De 2016 à 2019</span>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mb-5">
            <v-col>
                <v-row>
                    <v-col>
                        <span class="text-h4">Cursos</span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                        v-for="(course, i) in courses"
                        :key="i"
                        cols="12"
                        md="6"
                        class="mb-5"
                    >
                        <v-row>
                            <v-col cols="auto">
                                <v-avatar size="80">
                                    <v-img :src="course.image"></v-img>
                                </v-avatar>
                            </v-col>
                            <v-col>
                                <v-row>
                                    <v-col class="pb-0">
                                        <span class="text-h5 font-weight-bold">{{ course.company }}</span>
                                    </v-col>
                                </v-row>
                                <v-row class="mt-0 ml-5">
                                    <v-col>
                                        <v-row v-for="(item, n) in course.items" :key="n" no-gutters>
                                            <v-col>
                                                {{ item }}
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            courses: [
                {
                    company: "B7Web",
                    image: require("../../assets/education/logo_b7web.png"),
                    items: [
                        "Banco de dados MySQL",
                        "Bootstrap Básico",
                        "Frameworks",
                        "Fundamentos do PHP",
                        "Git/GitHub",
                        "HTML 5 e CSS 3",
                        "Javascript",
                        "PHP Orientado a Objetos",
                        "Produtividade na Programação",
                        "Vue JS",
                        "Webservices"
                    ]
                },
                {
                    company: "Escola Conquer",
                    image: require("../../assets/education/logo_conquer.png"),
                    items: [
                        "Inteligência Emocional",
                        "Inteligência Financeira"
                    ]
                },
                {
                    company: "Solyd - Treinamentos e cursos online",
                    image: require("../../assets/education/logo_solyd.png"),
                    items: [
                        "Python Básico"
                    ]
                },
                {
                    company: "Udemy",
                    image: require("../../assets/education/logo_udemy.png"),
                    items: [
                        "Sass / SCSS",
                        "Desenvolvimento Android"
                    ]
                },
                {
                    company: "CertiProf",
                    image: require("../../assets/education/logo_certiprof.jpg"),
                    items: [
                        "SFPC"
                    ]
                },
            ]
        };
    }
};
</script>