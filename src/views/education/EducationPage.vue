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
                        <v-avatar size="80" rounded>
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
                <v-row align="center">
                    <v-col cols="auto">
                        <v-avatar size="80" rounded>
                            <v-img src="../../assets/education/logo_uninter.jpg"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col>
                        <v-row>
                            <v-col class="pb-0">
                                <span class="text-h5 font-weight-bold">Centro Universitário Internacional UNINTER</span>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col cols="auto">
                                <span class="text-subtitle-1">Pós-graduação, Gestão da Tecnologia da Informação</span>
                            </v-col>
                            <v-col>
                                <span class="text-caption">2023</span>
                            </v-col>
                        </v-row>
                        <v-row class="mt-0">
                            <v-col cols="auto" class="py-0">
                                <span class="text-subtitle-1">Pós-graduação, Gestão para Líderes</span>
                            </v-col>
                            <v-col class="py-0">
                                <span class="text-caption">2023</span>
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
                                <v-avatar size="80" rounded>
                                    <v-img :src="course.image" contain></v-img>
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
                                                {{ item.name }}
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
                    company: "Escola Conquer",
                    image: require("../../assets/education/logo_conquer.png"),
                    items: [
                        { name: "Inteligência Emocional", link: "" },
                        { name: "Inteligência Financeira", link: "" },
                    ]
                },
                {
                    company: "Solyd - Treinamentos e cursos online",
                    image: require("../../assets/education/logo_solyd.png"),
                    items: [
                        { name: "Python Básico", link: "" }
                    ]
                },
                {
                    company: "CertiProf",
                    image: require("../../assets/education/logo_certiprof.jpg"),
                    items: [
                        { name: "SFPC", link: "" }
                    ]
                },
                {
                    company: "Udemy",
                    image: require("../../assets/education/logo_udemy.png"),
                    items: [
                        { name: "Sass / SCSS", link: "" },
                        { name: "Desenvolvimento Android", link: "" },
                        { name: "DevOps Ninja: Docker, Kubernetes e Rancher", link: "https://www.udemy.com/certificate/UC-48975d8a-64d6-4c9d-b1fc-9679d51f5e61/" }
                    ]
                },
                {
                    company: "B7Web",
                    image: require("../../assets/education/logo_b7web.png"),
                    items: [
                        { name: "Banco de dados MySQL", link: "https://alunos.b7web.com.br/media/certificates/certificado_4528.jpg" },
                        { name: "Bootstrap Básico", link: "https://alunos.b7web.com.br/media/certificates/certificado_4652.jpg" },
                        { name: "Docker", link: "https://alunos.b7web.com.br/media/certificates/certificado_5549796.jpg" },
                        { name: "Frameworks", link: "https://alunos.b7web.com.br/media/certificates/certificado_8977704.jpg" },
                        { name: "Fundamentos do PHP", link: "https://alunos.b7web.com.br/media/certificates/certificado_4654.jpg" },
                        { name: "Git/GitHub", link: "https://alunos.b7web.com.br/media/certificates/certificado_4705066.jpg" },
                        { name: "HTML 5 e CSS 3", link: "https://alunos.b7web.com.br/media/certificates/certificado_4552452.jpg" },
                        { name: "Javascript", link: "https://alunos.b7web.com.br/media/certificates/certificado_4942.jpg" },
                        { name: "PHP Orientado a Objetos", link: "https://alunos.b7web.com.br/media/certificates/certificado_849190.jpg" },
                        { name: "Produtividade na Programação", link: "https://alunos.b7web.com.br/media/certificates/certificado_4882330.jpg" },
                        { name: "Vue JS", link: "https://alunos.b7web.com.br/media/certificates/certificado_4211818.jpg" },
                        { name: "Webservices", link: "https://alunos.b7web.com.br/media/certificates/certificado_4384445.jpg" },
                    ]
                },
            ]
        };
    }
};
</script>