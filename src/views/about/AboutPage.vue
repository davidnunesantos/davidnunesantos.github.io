<template>
    <v-container class="pa-5">
        <v-row>
            <v-col>
                <span class="text-h4">Sobre mim</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p><b>Olá, eu sou o David!</b></p>
                <p>Tenho mais de 9 anos de experiência em tecnologia, passando por desenvolvimento, liderança técnica e gestão de múltiplos times. Hoje atuo como <b>Tech Leader na Agrotis</b>, sendo o responsável técnico pelo projeto <b>Produtor Rural</b>.</p>
                <p>No dia a dia, trabalho com desenvolvimento ponta a ponta, conectando o backend em <b>Java</b> com o frontend em <b>React</b>. Também cuido da parte de arquitetura e escalabilidade, utilizando ferramentas como <b>Kafka</b>, <b>Kubernetes</b> e <b>Jenkins</b>. Além da parte técnica, gosto bastante de estar próximo do time, apoiando no dia a dia, conduzindo rituais ágeis e ajudando no crescimento dos desenvolvedores.</p>
                <p>Fora do trabalho, curto assistir filmes, jogar boardgames e aproveitar um bom churrasco quando o tempo ajuda. Estou sempre buscando evoluir, tanto tecnicamente quanto na forma de trabalhar com pessoas.</p>
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
                                <v-icon left color="black">mdi-circle-small</v-icon>
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
                                <v-icon left color="black">mdi-circle-small</v-icon>
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
                { name: "Liderança Técnica e Mentoria", skills: [
                    { name: "Liderança de times de desenvolvimento", icon:"mdi-account-group" },
                    { name: "Mentoria técnica e code review", icon:"mdi-sprout" },
                    { name: "Tomada de decisão arquitetural", icon:"mdi-magnify" },
                    { name: "Facilitação de rituais ágeis (Scrum)", icon:"mdi-head-heart" },
                ] },
                { name: "Comunicação e Processos", skills: [
                    { name: "Refinamento técnico de demandas", icon:"mdi-comment-processing" },
                    { name: "Definição de padrões de projeto", icon:"mdi-handshake" },
                    { name: "Gestão de deploys e produção", icon:"mdi-rocket-launch" },
                ] },
                { name: "Visão Estratégica", skills: [
                    { name: "Pensamento orientado ao negócio", icon:"mdi-chess-rook" },
                    { name: "Foco em entrega de valor e qualidade", icon:"mdi-bullseye-arrow" },
                    { name: "Planejamento de releases e entregas", icon:"mdi-timer-sand-complete" },
                ] }
            ],
            hardskills: [
                { name: "Desenvolvimento & Stack Principal", skills: [
                    { name: "Java (Spring Boot e EJB)", value: 100, icon: "mdi-xml" },
                    { name: "React JS (Hooks, Context, Redux)", value: 100, icon: "mdi-code-block-tags" },
                    { name: "PHP (Laravel, Zend)", value: 90, icon: "mdi-language-php" },
                    { name: "JavaScript / TypeScript", value: 95, icon: "mdi-language-javascript" },
                    { name: "SQL (PostgreSQL, MySQL)", value: 90, icon: "mdi-database" },
                ] },
                { name: "Arquitetura e Mensageria", skills: [
                    { name: "Kafka (Streaming e Mensageria)", value: 85, icon: "mdi-Vector-combine" },
                    { name: "RESTful APIs & Microsserviços", value: 95, icon: "mdi-api" },
                    { name: "Design Patterns & Solid", value: 90, icon: "mdi-cogs" },
                    { name: "Arquitetura de Alta Disponibilidade", value: 80, icon: "mdi-poll" },
                ] },
                { name: "DevOps e Infraestrutura", skills: [
                    { name: "Kubernetes (Orquestração)", value: 85, icon: "mdi-kubernetes" },
                    { name: "Jenkins (CI/CD Pipelines)", value: 90, icon: "mdi-jenkins" },
                    { name: "Docker & Containerização", value: 95, icon: "mdi-docker" },
                    { name: "Linux & Google Cloud Platform", value: 85, icon: "mdi-linux" },
                ] },
                { name: "Metodologias e Ferramentas", skills: [
                    { name: "Agile (Scrum / Kanban)", value: 100, icon: "mdi-restore" },
                    { name: "Jira Cloud & Confluence", value: 100, icon: "mdi-jira" },
                    { name: "Git (GitHub / GitLab)", value: 100, icon: "mdi-git" },
                ] }
            ]
        };
    }
};
</script>