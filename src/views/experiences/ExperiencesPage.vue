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
                            <v-card-text v-html="item.description"></v-card-text>
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
                            position: "Analista de Sistemas Sênior | Tech Lead",
                            period: "Fevereiro de 2021 até o momento",
                            description: "Atualmente assumi um papel de líder técnico, sou o <i>backup</i> do meu líder direto. Realizo atividades de refinamento técnico, organização e distribuição das demandas para o time no sistema de gerenciamento, análise de problemas e melhoria de perfomarce, condução de dailys e sprints, além de ajudar na co-criação do planejamento de novas soluções e realizar o desenvolvimento."
                        },
                        {
                            position: "Analista de Sistemas Pleno",
                            period: "Janeiro de 2020 à Fevereiro de 2021",
                            description: "Tendo o PHP como main language, realizava correção de bugs, desenvolvimento e implementação de funcionalidades para os paineis e portais da empresa. Adquiri bons conhecimentos em CI/CD, docker e outras ferramentas de desenvolvimento e DevOps que tornam a rotina de trabalho mais fácil e ágil."
                        }
                    ]
                },
                {
                    company: "Mai Transportes (Autônomo)",
                    image: require("../../assets/experiences/logo_transmai.png"),
                    timeline: [
                        {
                            position: "Desenvolvedor Full Stack",
                            period: "Agosto de 2019 até o Setembro de 2021",
                            description: "<p>Para melhorar minhas habilidades, iniciei esse trabalho como freelancer, onde pude desenvolver três projetos para a transportadora Mai Transportes, o primeiro foi portal web de controle operacional, para gerenciar a frota de veiculos e as entregas, foi feito em PHP utilizando o ZendFramwork. Juntamente com esse portal eu desenvolvi o segundo projeto que é um aplicativo para os motoristas utilizarem e atualizarem o status da viagem, foi desenvolvido em Java Android. O terceiro projeto foi um novo portal web para realizar o controle financeiro da empresa, ele foi desenvolvido utilizando VueJS para o front, e Laravel como API.</p><p>Tecnologias utilizadas:</p> <ul><li>PHP</li><li>ZendFramework</li><li>JQuery</li><li>Smarty Template</li><li>HTML 5</li><li>CSS 3</li><li>PostgreSQL</li><li>MySQL</li><li>RestAPI</li><li>Java Android</li><li>Laravel</li><li>VueJS</li></ul>"
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