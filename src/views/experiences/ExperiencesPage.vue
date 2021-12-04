<template>
    <v-container class="pa-5">
        <v-row
            v-for="(experience, n) in experiences"
            :key="n"
        >
            <v-col cols="12">
                <v-row align="center" class="ml-2">
                    <v-col cols="auto">
                        <v-avatar size="50">
                            <v-img :src="experience.image"></v-img>
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
                            <v-card-text>{{ item.description }}</v-card-text>
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
                    image: require("../../assets/experiences/logo_pgmais.jpg"),
                    timeline: [
                        {
                            position: "Analista de Sistemas Sênior",
                            period: "Fevereiro de 2021 até o momento",
                            description: "Desde que assumi o cargo de analista sênior, me tornei referência para os outros integrantes do time. Estou a frente de alguns projetos e ajudo no desenvolvimento da equipe."
                        },
                        {
                            position: "Analista de Sistemas Pleno",
                            period: "Janeiro de 2020 à Fevereiro de 2021",
                            description: "Além de continuar trabalhando com PHP, estou adquirindo novos conhecimentos nesta nova jornada: ferramentas do Jira Software, o framework Laravel como base do projeto em que trabalho, o software Docker, Rundeck para rotinas de tarefas, Slack para comunicação, GitLab para versionamento de código, New Relic para acompanhamento de desempenho e algumas outras linguagens e frameworks como Python e Vue.js. Estou trabalhando em um time muito engajado e organizado."
                        }
                    ]
                },
                {
                    company: "Mai Transportes (Autônomo)",
                    image: require("../../assets/experiences/logo_transmai.png"),
                    timeline: [
                        {
                            position: "Desenvolvedor Full Stack",
                            period: "Agosto de 2019 até o momento",
                            description: "Atualmente estou construindo um sistema de gestão financeira para integrar ao portal WEB que planejei e desenvolvi para realizar o controle operacional da transportadora Mai Transportes, juntamente com este portal desenvolvi uma API para ser consumida por um aplicativo mobile, também desenvolvido por mim.<br>Tecnologias utilizadas: PHP, ZendFramework, JQuery, Smarty Template, HTML 5, CSS 3, PostgreSQL, MySQL, RestAPI, Java Android."
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
                            description: "Assumi um novo projeto que consistia na criação de um novo portal, o ERP. Realizei a integração entre todos os sistemas da empresa, criando uma RestAPI para comunicação entre os servidores e para emissão de Nota Fiscal, utilizei uma SOAP API para emissão de boletos. Além de continuar realizando treinamento e supervisão de novos estagiários de programação web."
                        },
                        {
                            position: "Programador Júnior",
                            period: "Março de 2018 à Dezembro de 2018",
                            description: "Criei um novo portal para um novo equipamento se comunicar com o banco de dados e para realizar o acompanhamento em tempo real. Treinava e supervisionava novos estagiários de programação web."
                        },
                        {
                            position: "Estagiário de Desenvolvimento Web",
                            period: "Outubro de 2017 à Março de 2018",
                            description: "Realizava pequenas manutenções, correções de BUGs e implementação de algumas novas funcionalidades em três portais da empresa utilizando PHP, ZendFramework, JQuery e PostgreSQL."
                        },
                        {
                            position: "Estagiário de Suporte Técnico",
                            period: "Março de 2017 à Outubro de 2017",
                            description: "Atendimento ao cliente, auxiliando na instalação, configuração e manutenção dos equipamentos vendidos pela empresa."
                        }
                    ]
                }
            ]
        };
    }
};
</script>