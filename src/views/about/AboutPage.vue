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
                <p>Com mais de 8 anos de experiência em tecnologia, trilhei um caminho que vai do suporte técnico à coordenação de múltiplas equipes de desenvolvimento. Hoje sou <b>Coordenador de Desenvolvimento</b> na PGMais, liderando seis times nas áreas de mensageria, inteligência artificial, automação e produtos digitais.</p>
                <p>Unindo visão técnica e estratégica, atuo com foco em performance, inovação e desenvolvimento de pessoas. Tenho experiência sólida em metodologias ágeis, definição de KPIs, gestão de DRE e tecnologias como PHP, VueJS, Docker, IA Generativa e Kubernetes. Sou movido por desafios, busco soluções que gerem impacto real e acredito na força de um time bem guiado para transformar ideias em valor.</p>
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
            <v-col v-for="(softskill, n) in softskills" :key="n" cols="12" sm="6" md="4">
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
                { name: "Liderança e Desenvolvimento de Pessoas", skills: [
                    { name: "Liderança de equipe técnica", icon:"mdi-account-group" },
                    { name: "Mentoria e formação de talentos", icon:"mdi-sprout" },
                    { name: "Capacidade de tomada de decisão", icon:"mdi-magnify" },
                    { name: "Habilidade para feedback constante", icon:"mdi-head-heart" },
                ] },
                { name: "Comunicação e Colaboração", skills: [
                    { name: "Comunicação clara e eficaz", icon:"mdi-comment-processing" },
                    { name: "Trabalho em equipe e colaboração interdisciplinar", icon:"mdi-handshake" },
                ] },
                { name: "Adaptabilidade e Inovação", skills: [
                    { name: "Flexibilidade frente a mudanças", icon:"mdi-wave" },
                    { name: "Criatividade para resolução de problemas", icon:"mdi-lightbulb-on" },
                    { name: "Proatividade na busca por soluções", icon:"mdi-rocket-launch" },
                ] },
                { name: "Visão Estratégica e Resultados", skills: [
                    { name: "Pensamento estratégico orientado ao negócio", icon:"mdi-chess-rook" },
                    { name: "Foco em resultados e entrega de valor", icon:"mdi-bullseye-arrow" },
                    { name: "Gestão de tempo e priorização", icon:"mdi-timer-sand-complete" },
                ] },
                { name: "Aprendizado Contínuo e Curiosidade", skills: [
                    { name: "Mentalidade de crescimento", icon:"mdi-trending-up" },
                    { name: "Busca constante por aprimoramento técnico e comportamental", icon:"mdi-school-outline" },
                ] }
            ],
            hardskills: [
                { name: "Gestão de Desempenho e Resultados", skills: [
                    { name: "Gestão de performance e produtividade da equipe", value: 100, icon: "mdi-account-group" },
                    { name: "Planejamento estratégico e controle orçamentário", value: 90, icon: "mdi-cash-multiple" },
                    { name: "Gestão de DRE, KPIs e métricas de qualidade", value: 85, icon: "mdi-chart-line" },
                    { name: "Capacity planning e gestão de licenças/ferramentas", value: 85, icon: "mdi-chart-timeline-variant" },
                    { name: "Análise de custo-benefício e tomada de decisão estratégica", value: 75, icon: "mdi-scale-balance" },
                    { name: "Elaboração de relatórios e apresentações executivas", value: 70, icon: "mdi-file-chart" },
                ] },
                { name: "Linguagens e Tecnologias", skills: [
                    { name: "PHP, Java, Python", value: 100, icon: "mdi-xml" },
                    { name: "JavaScript (VueJS, ReactJS, JQuery), HTML5, CSS3 (SASS/SCSS)", value: 100, icon: "mdi-code-block-tags" },
                    { name: "SQL", value: 80, icon: "mdi-database-search" },
                    { name: "Android (Java)", value: 40, icon: "mdi-android" },
                ] },
                { name: "Frameworks e Front-end", skills: [
                    { name: "Laravel, ZendFramework, Spring", value: 100, icon: "mdi-code-json" },
                    { name: "Vuetify, Bootstrap, Atomic Design, NextJS, Smarty Template", value: 100, icon: "mdi-language-javascript" },
                    { name: "Design System e Design Repositories", value: 95, icon: "mdi-pencil-ruler" },
                ] },
                { name: "Arquiteturas e Práticas", skills: [
                    { name: "RESTful API, SOAP API, Microserviços", value: 90, icon: "mdi-api" },
                    { name: "Design Patterns", value: 55, icon: "mdi-cogs" },
                    { name: "CI/CD (Integração e Entrega Contínua)", value: 50, icon: "mdi-cogs" },
                    { name: "Arquitetura de Alta Disponibilidade", value: 40, icon: "mdi-poll" },
                    { name: "Metodologias Ágeis: Scrum e Kanban", value: 85, icon: "mdi-restore" },
                ] },
                { name: "Ferramentas e Plataformas", skills: [
                    { name: "Docker, Kubernetes, GitLab, GitHub, Visual Studio Code", value: 90, icon: "mdi-docker" },
                    { name: "PostgreSQL, MySQL, Redis, RabbitMQ, MinIO", value: 90, icon: "mdi-database" },
                    { name: "Jira Cloud, Android Studio, Linux", value: 95, icon: "mdi-jira" },
                    { name: "Google Cloud Platform, Oracle Cloud", value: 50, icon: "mdi-google-cloud" },
                    { name: "Asterisk, TTS, ASR, MRCP", value: 35, icon: "mdi-asterisk" },
                    { name: "IBM Watson, Kubeflow, PlatIA", value: 80, icon: "mdi-forum" },
                ] }
            ]
        };
    }
};
</script>