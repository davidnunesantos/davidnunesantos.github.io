<template>
    <v-container class="pa-5">
        <v-row>
            <v-col>
                <span class="text-h4">Sobre mim</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p><b>Olá, eu sou David!</b></p>
                <p>Durante minha jornada profissional de mais de 6 anos em Tecnologia, construi uma carreira sólida. Iniciando no suporte técnico, tive a oportunidade de migrar para a programação rapidamente, conquistando novos desafios devido à alta performance.</p>
                <p>Atualmente, lidero um time com paixão e dedicação como Squad Leader. Atuo como facilitador e mentor e meu foco está em desenvolver o potencial de cada membro da equipe, garantindo uma análise de dados estratégica, através de metodologias ágeis, como Scrum.</p>
                <p>Sou uma pessoa alegre e positiva, dentro e fora do contexto profissional. Nos momentos de lazer, divido meu tempo entre filmes, séries, videogames, boardgames e a paixão por tocar teclado. Além disso, uno o meu desenvolvimento profissional ao hobby, através da busca por soluções inovadoras no campo tecnológico, desenvolvendo sistemas para uso pessoal.</p>
                <p>Minha trajetória reflete meu comprometimento e a busca constante por excelência. Estou ansioso para abraçar novos desafios, contribuindo com o desenvolvimento do pilar do crescimento de qualquer empresa: pessoas.</p>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mt-5">
            <v-col>
                <span class="text-h5">Soft Skills</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-row no-gutters>
                    <v-col v-for="(softskill, n) in softskills" :key="n" cols="12" sm="6" lg="4">
                        <v-icon left small color="black">{{ softskill.icon }}</v-icon>
                        <span class="black--text">{{ softskill.name }}</span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="mt-5">
            <v-col>
                <span class="text-h5">Hard Skills</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6">
                <v-row>
                    <v-col cols="12">
                        <v-row>
                            <v-col>
                                <span class="text-h6">Linguagens</span>
                            </v-col>
                        </v-row>
                        <v-row v-for="(language, n) in languages" :key="n" no-gutters class="my-1">
                            <v-col>
                                <v-progress-linear :value="language.value" height="22" rounded color="green">
                                    <v-row no-gutters class="pa-2">
                                        <v-col>
                                            <v-icon left small color="black">{{ language.icon }}</v-icon>
                                            <span class="black--text">{{ language.name }}</span>
                                        </v-col>
                                    </v-row>
                                </v-progress-linear>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12">
                        <v-row>
                            <v-col>
                                <span class="text-h6">Arquiteturas</span>
                            </v-col>
                        </v-row>
                        <v-row v-for="(architecture, n) in architectures" :key="n" no-gutters class="my-1">
                            <v-col>
                                <v-progress-linear :value="architecture.value" height="22" rounded color="green">
                                    <v-row no-gutters class="pa-2">
                                        <v-col>
                                            <v-icon left small color="black">{{ architecture.icon }}</v-icon>
                                            <span class="black--text">{{ architecture.name }}</span>
                                        </v-col>
                                    </v-row>
                                </v-progress-linear>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="6">
                <v-row>
                    <v-col cols="12">
                        <v-row>
                            <v-col>
                                <span class="text-h6">Frameworks</span>
                            </v-col>
                        </v-row>
                        <v-row v-for="(framework, n) in frameworks" :key="n" no-gutters class="my-1">
                            <v-col>
                                <v-progress-linear :value="framework.value" height="22" rounded color="green">
                                    <v-row no-gutters class="pa-2">
                                        <v-col>
                                            <v-icon left small color="black">{{ framework.icon }}</v-icon>
                                            <span class="black--text">{{ framework.name }}</span>
                                        </v-col>
                                    </v-row>
                                </v-progress-linear>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12">
                        <v-row>
                            <v-col>
                                <span class="text-h6">Ferramentas</span>
                            </v-col>
                        </v-row>
                        <v-row v-for="(tool, n) in tools" :key="n" no-gutters class="my-1">
                            <v-col>
                                <v-progress-linear :value="tool.value" height="22" rounded color="green">
                                    <v-row no-gutters class="pa-2">
                                        <v-col>
                                            <v-icon left small color="black">{{ tool.icon }}</v-icon>
                                            <span class="black--text">{{ tool.name }}</span>
                                        </v-col>
                                    </v-row>
                                </v-progress-linear>
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
            softskills: [
                { name: "Comunicação Efetiva", icon:"mdi-account-group" },
                { name: "Colaboração", icon:"mdi-account-multiple-check" },
                { name: "Resolução de Problemas", icon:"mdi-bug-check" },
                { name: "Adaptabilidade", icon:"mdi-swap-horizontal" },
                { name: "Proatividade", icon:"mdi-lightbulb-on-outline" },
                { name: "Mentoria", icon:"mdi-account-tie" },
                { name: "Gestão de Pessoas", icon:"mdi-handshake" },
                { name: "Análise de Dados", icon:"mdi-chart-line" },
                { name: "Entusiasmo", icon:"mdi-fire" },
                { name: "Organização", icon:"mdi-format-list-checks" }
            ],
            languages: [
                { name: "PHP", value: 100, icon: "mdi-language-php" },
                { name: "VueJS", value: 100, icon: "mdi-vuejs" },
                { name: "HTML 5", value: 100, icon: "mdi-language-html5" },
                { name: "Javascript", value: 95, icon: "mdi-language-javascript" },
                { name: "CSS 3", value: 90, icon: "mdi-language-css3" },
                { name: "SASS", value: 70, icon: "mdi-sass" },
                { name: "Android", value: 60, icon: "mdi-android" },
                { name: "Python", value: 30, icon: "mdi-language-python" },
            ],
            frameworks: [
                { name: "Vuetify", value: 100, icon: "mdi-vuetify" },
                { name: "Bootstrap", value: 95, icon: "mdi-bootstrap" },
                { name: "Laravel", value: 93, icon: "mdi-laravel" },
                { name: "JQuery", value: 90, icon: "mdi-jquery" },
                { name: "Métodologia Scrum", value: 80, icon: "mdi-autorenew" },
                { name: "Zend Framework", value: 35, icon: "mdi-zend" },
                { name: "Smarty Template", value: 30, icon: "mdi-application-outline" },
            ],
            tools: [
                { name: "Jira Cloud", value: 95, icon: "mdi-jira" },
                { name: "Visual Studio Code", value: 93, icon: "mdi-microsoft-visual-studio" },
                { name: "MySQL", value: 90, icon: "mdi-database-outline" },
                { name: "PostgreSQL", value: 87, icon: "mdi-database" },
                { name: "GitLab", value: 85, icon: "mdi-gitlab" },
                { name: "GitHub", value: 80, icon: "mdi-github" },
                { name: "Linux", value: 75, icon: "mdi-linux" },
                { name: "Docker", value: 60, icon: "mdi-docker" },
                { name: "Google Cloud Platform", value: 50, icon: "mdi-google-cloud" },
                { name: "Oracle Cloud", value: 40, icon: "mdi-cloud" },
                { name: "Android Studio", value: 30, icon: "mdi-android-studio" },
            ],
            architectures: [
                { name: "Rest API", value: 90, icon: "mdi-api" },
                { name: "Soap API", value: 75, icon: "mdi-api" },
                { name: "Atomic Design", value: 70, icon: "mdi-atom" },
                { name: "Design System", value: 65, icon: "mdi-drawing-box" },
                { name: "Design Repositories", value: 60, icon: "mdi-cogs" },
                { name: "Design Patterns", value: 55, icon: "mdi-cogs" },
                { name: "Continuous Integration", value: 50, icon: "mdi-cogs" },
                { name: "Continuous Delivery", value: 50, icon: "mdi-cogs" },
            ]
        };
    }
};
</script>