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
                <p>Com mais de 7 anos de experiência em tecnologia, desenvolvi uma trajetória sólida que vai do suporte técnico à liderança de equipes em projetos complexos, atualmente lidero um time de inteligência artificial como Squad Leader, unindo habilidades em liderança de TI e gestão de equipes para impulsionar resultados estratégicos e promover inovação.</p>
                <p>Sou responsável por conduzir cerimônias ágeis, monitorar KPIs, gerenciar custos e promover o desenvolvimento de cada membro da equipe. Especialista em tecnologias como PHP, VueJS e Docker, busco sempre implementar soluções escaláveis e eficientes, unindo inovação e excelência à gestão de pessoas e processos. Sou motivado por desafios e pela busca constante de soluções que gerem impacto e crescimento.</p>
                <p>Nos momentos de lazer, aproveito para ver filmes, explorar boardgames e nos dias de sol fazer um churrasco. Estou sempre em busca de crescimento pessoal e profissional, unindo paixão pela tecnologia com dedicação ao desenvolvimento de pessoas com foco em resultados.</p>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mt-5">
            <v-col>
                <span class="text-h5">Soft Skills</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(softskill, n) in softskills" :key="n" cols="12" sm="6" md="4" lg="3">
                <v-row no-gutters class="px-2">
                    <v-col cols="12">
                        <v-row>
                            <v-col>
                                <span class="text-h6">{{ softskill.name }}</span>
                            </v-col>
                        </v-row>
                        <v-row v-for="(skill, k) in softskill.skills" :key="k" no-gutters>
                            <v-col>
                                <v-icon left color="black"><!-- {{ skill.icon }} -->mdi-circle-small</v-icon>
                                <span class="black--text text-subtitle-2">{{ skill.name }}</span>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="mt-5">
            <v-col>
                <span class="text-h5">Hard Skills</span>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col v-for="(hardskill, n) in hardskills" :key="n" cols="12" :sm="n < 2 ? 'auto' : 4" :md="n == 0 ? 'auto' : ''">
                <v-row no-gutters class="px-2">
                    <v-col cols="12">
                        <v-row>
                            <v-col>
                                <span class="text-h6">{{ hardskill.name }}</span>
                            </v-col>
                        </v-row>
                        <v-row v-for="(skill, k) in hardskill.skills" :key="k" no-gutters>
                            <v-col>
                                <v-icon left color="black"><!-- {{ skill.icon }} -->mdi-circle-small</v-icon>
                                <span class="black--text text-subtitle-2">{{ skill.name }}</span>
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
                { name: "Liderança e Desenvolvimento", skills: [
                    { name: "Liderança de Equipe", icon:"mdi-account-group" },
                    { name: "Mentoria e Desenvolvimento de Pessoas", icon:"mdi-sprout" },
                    { name: "Capacidade de Tomada de Decisão", icon:"mdi-magnify" },
                    { name: "Inteligência Emocional", icon:"mdi-head-heart" },
                ] },
                { name: "Comunicação e Colaboração", skills: [
                    { name: "Comunicação Eficaz", icon:"mdi-comment-processing" },
                    { name: "Colaboração e Trabalho em Equipe", icon:"mdi-handshake" },
                    { name: "Habilidade para Feedback Constante", icon:"mdi-comment-quote" },
                ] },
                { name: "Adaptabilidade e Inovação", skills: [
                    { name: "Adaptabilidade e Flexibilidade", icon:"mdi-wave" },
                    { name: "Criatividade e Inovação", icon:"mdi-lightbulb-on" },
                    { name: "Proatividade", icon:"mdi-rocket-launch" },
                    { name: "Resolução de Problemas", icon:"mdi-bug-check" },
                ] },
                { name: "Pensamento Estratégico e Resultados", skills: [
                    { name: "Pensamento Estratégico", icon:"mdi-chess-rook" },
                    { name: "Orientação para Resultados", icon:"mdi-bullseye-arrow" },
                    { name: "Curiosidade e Aprendizado Contínuo", icon:"mdi-bookshelf" },
                    { name: "Gestão de Tempo e Prioridades", icon:"mdi-timer-sand-complete" },
                ] }
            ],
            hardskills: [
                { name: "Gestão de Desempenho e Resultados", skills: [
                    { name: "Gestão de Performance da Equipe", value: 100, icon: "mdi-account-group" },
                    { name: "Controle de Orçamento e Custos Operacionais", value: 90, icon: "mdi-cash-multiple" },
                    { name: "Acompanhamento de Métricas de Qualidade", value: 87, icon: "mdi-chart-bar-stacked" },
                    { name: "Gestão de DRE e KPIs", value: 85, icon: "mdi-chart-line" },
                    { name: "Gestão de Capacidade (Capacity Planning) ", value: 85, icon: "mdi-chart-timeline-variant" },
                    { name: "Gestão de Licenças e Contratos de Ferramentas", value: 80, icon: "mdi-file-document" },
                    { name: "Análise de Custo-Benefício", value: 75, icon: "mdi-scale-balance" },
                    { name: "Planejamento Estratégico", value: 70, icon: "mdi-map-marker-path" },
                    { name: "Relatórios e Apresentações Executivas", value: 70, icon: "mdi-file-chart" },
                    { name: "Tomada de Decisão Estratégica", value: 65, icon: "mdi-lightbulb-on" },
                ] },
                { name: "Linguagens", skills: [
                    { name: "PHP", value: 100, icon: "mdi-language-php" },
                    { name: "VueJS", value: 100, icon: "mdi-vuejs" },
                    { name: "HTML 5", value: 100, icon: "mdi-language-html5" },
                    { name: "Javascript", value: 100, icon: "mdi-language-javascript" },
                    { name: "CSS 3", value: 90, icon: "mdi-language-css3" },
                    { name: "JQuery", value: 90, icon: "mdi-jquery" },
                    { name: "SQL", value: 80, icon: "mdi-database-search" },
                    { name: "ReactJS", value: 50, icon: "mdi-react" },
                    { name: "Android", value: 40, icon: "mdi-android" },
                    { name: "Java", value: 40, icon: "mdi-language-java" },
                    { name: "Python", value: 30, icon: "mdi-language-python" },
                ] },
                { name: "Frameworks", skills: [
                    { name: "Laravel", value: 100, icon: "mdi-laravel" },
                    { name: "Vuetify", value: 100, icon: "mdi-vuetify" },
                    { name: "Bootstrap", value: 95, icon: "mdi-bootstrap" },
                    { name: "Atomic Design", value: 90, icon: "mdi-atom" },
                    { name: "SASS (SCSS)", value: 70, icon: "mdi-sass" },
                    { name: "NextJS", value: 55, icon: "mdi-react" },
                    { name: "ZendFramework", value: 50, icon: "mdi-zend" },
                    { name: "Smarty Template", value: 45, icon: "mdi-application-outline" },
                    { name: "Spring", value: 30, icon: "mdi-leaf" },
                ] },
                { name: "Arquiteturas", skills: [
                    { name: "RESTful API", value: 90, icon: "mdi-api" },
                    { name: "Scrum", value: 85, icon: "mdi-restore" },
                    { name: "Kanban", value: 85, icon: "mdi-view-column" },
                    { name: "Microserviços", value: 80, icon: "mdi-sitemap-outline" },
                    { name: "SOAP API", value: 75, icon: "mdi-api" },
                    { name: "Design System", value: 65, icon: "mdi-drawing-box" },
                    { name: "Design Repositories", value: 60, icon: "mdi-cogs" },
                    { name: "Design Patterns", value: 55, icon: "mdi-cogs" },
                    { name: "CI/CD", value: 50, icon: "mdi-cogs" },
                    { name: "Arquitetura de Alta Disponibilidade", value: 40, icon: "mdi-poll" },
                ] },
                { name: "Ferramentas", skills: [
                    { name: "Jira Cloud", value: 95, icon: "mdi-jira" },
                    { name: "Visual Studio Code", value: 93, icon: "mdi-microsoft-visual-studio" },
                    { name: "Docker", value: 90, icon: "mdi-docker" },
                    { name: "PostgreSQL", value: 90, icon: "mdi-database" },
                    { name: "MySQL", value: 90, icon: "mdi-database-outline" },
                    { name: "GitLab", value: 85, icon: "mdi-gitlab" },
                    { name: "GitHub", value: 80, icon: "mdi-github" },
                    { name: "Watson", value: 80, icon: "mdi-forum" },
                    { name: "Linux", value: 75, icon: "mdi-linux" },
                    { name: "Google Cloud Platform", value: 50, icon: "mdi-google-cloud" },
                    { name: "Oracle Cloud", value: 40, icon: "mdi-cloud" },
                    { name: "Asterisk", value: 35, icon: "mdi-asterisk" },
                    { name: "TTS, ASRC, MRCP", value: 35, icon: "mdi-account-voice" },
                    { name: "Android Studio", value: 30, icon: "mdi-android-studio" },
                    { name: "Kubernetes", value: 25, icon: "mdi-kubernetes" },
                    { name: "PlatIA", value: 25, icon: "mdi-robot" },
                ] }
            ]
        };
    }
};
</script>