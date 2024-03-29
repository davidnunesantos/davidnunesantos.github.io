<template>
    <v-container class="pa-5">
        <v-row
            v-for="(experience, n) in experiences"
            :key="n"
        >
            <v-col cols="12">
                <v-row align="center" class="ml-2">
                    <v-col cols="auto">
                        <v-avatar size="70">
                            <v-img :src="experience.image" contain></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col>
                        <span class="text-h5">{{ experience.company }}</span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12">
                <v-timeline align-top dense>
                    <v-timeline-item
                        v-for="(item, i) in experience.timeline"
                        :key="i"
                        small
                    >
                        <v-card class="elevation-2">
                            <v-card-title>{{ item.position }}</v-card-title>
                            <v-card-subtitle>{{ item.period }}</v-card-subtitle>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <p>
                                            <span v-html="item.description" />
                                        </p>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters class="mt-2">
                                    <v-col cols="12">
                                        <b>Principais competências</b>
                                    </v-col>
                                    <v-col v-for="(skill, k) in item.skills" cols="auto" class="pa-1" :key="k">
                                        <v-chip :color="skill.color" small>
                                            <v-icon left small>{{ skill.icon }}</v-icon>
                                            {{ skill.title }}
                                        </v-chip>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            experiences: [
                {
                    company: "PG Mais Soluções em Tecnologia da Informação",
                    image: require("../../assets/experiences/logo_pg_nova.svg"),
                    timeline: [
                        {
                            position: "Squad Leader",
                            period: "Novembro de 2023 até o momento",
                            description: "Realizo todo o processo de gestão de pessoas do time, desde o recrutamento até o offboarding. Sou responsável pela condução dos rituais do time, trabalhando com a metodologia Scrum, atuando no papel de Scrum Master. Estando em uma posição de gestor tenho a responsabilidade de engajar  e potencializar o resultado de todo o time, fazendo a análise dos dados de maneira estratégica para ter uma equipe de alta performance.",
                            skills: [
                                {
                                    icon: "mdi-sync",
                                    color: "green",
                                    title: "Métodologia Ágil"
                                },
                                {
                                    icon: "mdi-file-arrow-left-right",
                                    color: "green",
                                    title: "Gestão da Mudança"
                                },
                                {
                                    icon: "mdi-chart-multiple",
                                    color: "green",
                                    title: "Analise de dados"
                                },
                                {
                                    icon: "mdi-account-group-outline",
                                    color: "green",
                                    title: "Gestão de Pessoas"
                                },
                                {
                                    icon: "mdi-human-male-board",
                                    color: "green",
                                    title: "Mentoria"
                                },
                                {
                                    icon: "mdi-cloud",
                                    color: "primary",
                                    title: "Oracle Cloud"
                                },
                                {
                                    icon: "mdi-docker",
                                    color: "primary",
                                    title: "Docker"
                                },
                                {
                                    icon: "mdi-sass",
                                    color: "primary",
                                    title: "SASS"
                                },
                                {
                                    icon: "mdi-drawing-box",
                                    color: "primary",
                                    title: "Design System"
                                },
                                {
                                    icon: "mdi-api",
                                    color: "primary",
                                    title: "Rest e Soap API"
                                },
                                {
                                    icon: "mdi-language-php",
                                    color: "primary",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-laravel",
                                    color: "primary",
                                    title: "Laravel"
                                },
                                {
                                    icon: "mdi-vuejs",
                                    color: "primary",
                                    title: "VueJS"
                                },
                                {
                                    icon: "mdi-vuetify",
                                    color: "primary",
                                    title: "Vuetify"
                                },
                                {
                                    icon: "mdi-database",
                                    color: "primary",
                                    title: "MySQL"
                                },
                                {
                                    icon: "mdi-gitlab",
                                    color: "primary",
                                    title: "GitLab"
                                },
                                {
                                    icon: "mdi-jira",
                                    color: "primary",
                                    title: "Jira"
                                }
                            ]
                        },
                        {
                            position: "Tech Leader",
                            period: "Abril de 2022 à Novembro de 2023",
                            description: "Como líder récnico, me tornei o principal responsável pelas aplicações front-end da empresa, realizava atividades de refinamento técnico das demandas para o time, análise de problemas e melhorias de performance. Além disso, participava do planejamento de novas soluções, estando sempre em busca de inovações para dentro da empresa. Atuava também na gestão de pessoas.",
                            skills: [
                                {
                                    icon: "mdi-human-male-board",
                                    color: "green",
                                    title: "Mentoria"
                                },
                                {
                                    icon: "mdi-docker",
                                    color: "primary",
                                    title: "Docker"
                                },
                                {
                                    icon: "mdi-sass",
                                    color: "primary",
                                    title: "SASS"
                                },
                                {
                                    icon: "mdi-drawing-box",
                                    color: "primary",
                                    title: "Design System"
                                },
                                {
                                    icon: "mdi-language-python",
                                    color: "primary",
                                    title: "Python"
                                },
                                {
                                    icon: "mdi-api",
                                    color: "primary",
                                    title: "Rest e Soap API"
                                },
                                {
                                    icon: "mdi-language-php",
                                    color: "primary",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-laravel",
                                    color: "primary",
                                    title: "Laravel"
                                },
                                {
                                    icon: "mdi-vuejs",
                                    color: "primary",
                                    title: "VueJS"
                                },
                                {
                                    icon: "mdi-vuetify",
                                    color: "primary",
                                    title: "Vuetify"
                                },
                                {
                                    icon: "mdi-database",
                                    color: "primary",
                                    title: "MySQL"
                                },
                                {
                                    icon: "mdi-gitlab",
                                    color: "primary",
                                    title: "GitLab"
                                },
                                {
                                    icon: "mdi-jira",
                                    color: "primary",
                                    title: "Jira"
                                }
                            ]
                        },
                        {
                            position: "Analista de Sistemas Sênior",
                            period: "Fevereiro de 2021 à Abril de 2022",
                            description: "Além de continuar atuando no desenvolvimento e implementação de novas funcionalidades, migrei para uma equipe maior e me tornei referência para o time, contribuindo para o crescimento profissional de outros desenvolvedores.",
                            skills: [
                                {
                                    icon: "mdi-human-male-board",
                                    color: "green",
                                    title: "Mentoria"
                                },
                                {
                                    icon: "mdi-docker",
                                    color: "primary",
                                    title: "Docker"
                                },
                                {
                                    icon: "mdi-sass",
                                    color: "primary",
                                    title: "SASS"
                                },
                                {
                                    icon: "mdi-drawing",
                                    color: "primary",
                                    title: "Atomic Design"
                                },
                                {
                                    icon: "mdi-language-python",
                                    color: "primary",
                                    title: "Python"
                                },
                                {
                                    icon: "mdi-api",
                                    color: "primary",
                                    title: "Rest e Soap API"
                                },
                                {
                                    icon: "mdi-language-php",
                                    color: "primary",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-laravel",
                                    color: "primary",
                                    title: "Laravel"
                                },
                                {
                                    icon: "mdi-language-html5",
                                    color: "primary",
                                    title: "HTML"
                                },
                                {
                                    icon: "mdi-language-css3",
                                    color: "primary",
                                    title: "CSS"
                                },
                                {
                                    icon: "mdi-language-javascript",
                                    color: "primary",
                                    title: "JavaScript"
                                },
                                {
                                    icon: "mdi-vuejs",
                                    color: "primary",
                                    title: "VueJS"
                                },
                                {
                                    icon: "mdi-vuetify",
                                    color: "primary",
                                    title: "Vuetify"
                                },
                                {
                                    icon: "mdi-database",
                                    color: "primary",
                                    title: "MySQL"
                                },
                                {
                                    icon: "mdi-gitlab",
                                    color: "primary",
                                    title: "GitLab"
                                },
                                {
                                    icon: "mdi-jira",
                                    color: "primary",
                                    title: "Jira"
                                }
                            ]
                        },
                        {
                            position: "Analista de Sistemas Pleno",
                            period: "Janeiro de 2020 à Fevereiro de 2021",
                            description: "Tendo o PHP como <i>main language</i>, realizava correção de <i>BUGs</i>, desenvolvimento e implementação de funcionalidades para os paineis e portais da empresa. Adquiri bons conhecimentos em <i>CI/CD</i>, docker e outras ferramentas de desenvolvimento e <i>DevOps</i> que tornam a rotina de trabalho mais fácil e ágil.",
                            skills: [
                                {
                                    icon: "mdi-docker",
                                    color: "primary",
                                    title: "Docker"
                                },
                                {
                                    icon: "mdi-api",
                                    color: "primary",
                                    title: "Soap API"
                                },
                                {
                                    icon: "mdi-language-php",
                                    color: "primary",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-laravel",
                                    color: "primary",
                                    title: "Laravel"
                                },
                                {
                                    icon: "mdi-language-html5",
                                    color: "primary",
                                    title: "HTML"
                                },
                                {
                                    icon: "mdi-language-css3",
                                    color: "primary",
                                    title: "CSS"
                                },
                                {
                                    icon: "mdi-language-javascript",
                                    color: "primary",
                                    title: "JavaScript"
                                },
                                {
                                    icon: "mdi-jquery",
                                    color: "primary",
                                    title: "JQuery"
                                },
                                {
                                    icon: "mdi-database",
                                    color: "primary",
                                    title: "MySQL"
                                },
                                {
                                    icon: "mdi-bootstrap",
                                    color: "primary",
                                    title: "Bootstrap"
                                },
                                {
                                    icon: "mdi-gitlab",
                                    color: "primary",
                                    title: "GitLab"
                                },
                                {
                                    icon: "mdi-jira",
                                    color: "primary",
                                    title: "Jira"
                                }
                            ]
                        }
                    ]
                },
                {
                    company: "VendPago Soluções de Pagamentos LTDA",
                    image: require("../../assets/experiences/logo_vendpago.jpg"),
                    timeline: [
                        {
                            position: "Programador Pleno",
                            period: "Janeiro de 2019 à Janeiro de 2020",
                            description: "Assumi um novo projeto que consistia na criação de um novo portal, o <i>ERP</i>. Realizei a integração entre todos os sistemas da empresa, criando uma <i>RestAPI</i> para comunicação entre os servidores e para emissão de Nota Fiscal, utilizei uma <i>SOAP API</i> para emissão de boletos. Além de continuar realizando treinamento e supervisão de novos estagiários de programação web.",
                            skills: [
                                {
                                    icon: "mdi-api",
                                    color: "primary",
                                    title: "Rest e Soap API"
                                },
                                {
                                    icon: "mdi-human-male-board",
                                    color: "green",
                                    title: "Treinamentos"
                                },
                                {
                                    icon: "mdi-language-php",
                                    color: "primary",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-zend",
                                    color: "primary",
                                    title: "Zend Framework"
                                },
                                {
                                    icon: "mdi-language-html5",
                                    color: "primary",
                                    title: "HTML"
                                },
                                {
                                    icon: "mdi-language-css3",
                                    color: "primary",
                                    title: "CSS"
                                },
                                {
                                    icon: "mdi-language-javascript",
                                    color: "primary",
                                    title: "JavaScript"
                                },
                                {
                                    icon: "mdi-jquery",
                                    color: "primary",
                                    title: "JQuery"
                                },
                                {
                                    icon: "mdi-database",
                                    color: "primary",
                                    title: "PostgreSQL"
                                },
                                {
                                    icon: "mdi-bootstrap",
                                    color: "primary",
                                    title: "Bootstrap"
                                },
                                {
                                    icon: "mdi-github",
                                    color: "primary",
                                    title: "GitHub"
                                }
                            ]
                        },
                        {
                            position: "Programador Júnior",
                            period: "Março de 2018 à Dezembro de 2018",
                            description: "Criei um novo portal para um novo equipamento realizar a comunicação com o banco de dados e para realizar o acompanhamento em tempo real. Treinava e supervisionava novos estagiários de programação web.",
                            skills: [
                                {
                                    icon: "mdi-human-male-board",
                                    color: "green",
                                    title: "Treinamentos"
                                },
                                {
                                    icon: "mdi-language-php",
                                    color: "primary",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-zend",
                                    color: "primary",
                                    title: "Zend Framework"
                                },
                                {
                                    icon: "mdi-language-html5",
                                    color: "primary",
                                    title: "HTML"
                                },
                                {
                                    icon: "mdi-language-css3",
                                    color: "primary",
                                    title: "CSS"
                                },
                                {
                                    icon: "mdi-language-javascript",
                                    color: "primary",
                                    title: "JavaScript"
                                },
                                {
                                    icon: "mdi-jquery",
                                    color: "primary",
                                    title: "JQuery"
                                },
                                {
                                    icon: "mdi-database",
                                    color: "primary",
                                    title: "PostgreSQL"
                                },
                                {
                                    icon: "mdi-bootstrap",
                                    color: "primary",
                                    title: "Bootstrap"
                                },
                                {
                                    icon: "mdi-github",
                                    color: "primary",
                                    title: "GitHub"
                                }
                            ]
                        },
                        {
                            position: "Estagiário de Desenvolvimento Web",
                            period: "Outubro de 2017 à Março de 2018",
                            description: "Realizava pequenas manutenções, correções de <i>BUGs</i> e implementação de algumas novas funcionalidades em três portais da empresa utilizando PHP, ZendFramework, JQuery e PostgreSQL.",
                            skills: [
                                {
                                    icon: "mdi-language-php",
                                    color: "primary",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-zend",
                                    color: "primary",
                                    title: "Zend Framework"
                                },
                                {
                                    icon: "mdi-language-html5",
                                    color: "primary",
                                    title: "HTML"
                                },
                                {
                                    icon: "mdi-language-css3",
                                    color: "primary",
                                    title: "CSS"
                                },
                                {
                                    icon: "mdi-language-javascript",
                                    color: "primary",
                                    title: "JavaScript"
                                },
                                {
                                    icon: "mdi-jquery",
                                    color: "primary",
                                    title: "JQuery"
                                },
                                {
                                    icon: "mdi-database",
                                    color: "primary",
                                    title: "PostgreSQL"
                                },
                                {
                                    icon: "mdi-bootstrap",
                                    color: "primary",
                                    title: "Bootstrap"
                                },
                                {
                                    icon: "mdi-github",
                                    color: "primary",
                                    title: "GitHub"
                                }
                            ]
                        },
                        {
                            position: "Estagiário de Suporte Técnico",
                            period: "Março de 2017 à Outubro de 2017",
                            description: "Atendimento ao cliente, auxiliando na instalação, configuração e manutenção dos equipamentos vendidos pela empresa.",
                            skills: [
                                {
                                    icon: "mdi-face-agent",
                                    color: "primary",
                                    title: "Suporte técnico"
                                },
                                {
                                    icon: "mdi-lan",
                                    color: "primary",
                                    title: "Redes"
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
</script>