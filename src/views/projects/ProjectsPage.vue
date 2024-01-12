<template>
    <v-container class="pa-5">
        <v-row v-for="(project, i) in projects" :key="i">
            <v-col cols="12">
                <v-card>
                    <v-img :src="project.logo" height="150px" contain></v-img>
                    <v-card-title>
                        {{ project.title }}
                    </v-card-title>
                    <v-card-subtitle>
                        {{ project.subtitle }}
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn text @click="project.show = !project.show">
                            {{ project.show ? 'Esconder detalhes' : 'Ver detalhes' }}
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="project.show = !project.show">
                            <v-icon>{{ project.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="project.show">
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row>
                                    <v-col>
                                        <span v-html="project.description" />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <span class="text-h6">Linguagens e ferramentas utilizadas</span>
                                    </v-col>
                                    <v-col v-for="(tool, x) in project.tools" :key="x" cols="auto">
                                        <v-chip :color="tool.color" dark>
                                            <v-icon left>{{ tool.icon }}</v-icon>
                                            {{ tool.title }}
                                        </v-chip>
                                    </v-col>
                                </v-row>
                                <v-row v-if="project.images">
                                    <v-col cols="12">
                                        <span class="text-h6">Galeria</span>
                                    </v-col>
                                    <v-col v-for="(image, k) in project.images" :key="k" class="d-flex child-flex" cols="4">
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                <v-img
                                                    :src="image.file"
                                                    aspect-ratio="1.5"
                                                    class="grey lighten-2"
                                                    style="cursor: pointer;"
                                                    @click="openImageModal(image.file, image.description)"
                                                />
                                            </v-col>
                                            <v-col class="mt-1" cols="12">
                                                <span v-html="image.description" />
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="image_modal" max-width="1000">
            <v-row no-gutters>
                <v-col>
                    <v-img
                        :src="selected_image"
                        width="100%"
                        class="grey lighten-2"
                    >
                        <v-btn icon @click="closeImageModal">
                            <v-icon color="white">mdi-close</v-icon>
                        </v-btn>
                    </v-img>
                </v-col>
            </v-row>
            <v-row no-gutters class="white pa-4">
                <v-col>
                    <span v-html="selected_description" />
                </v-col>
            </v-row>
        </v-dialog>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            image_modal: false,
            selected_image: null,
            selected_description: null,
            projects: [
                {
                    show: false,
                    logo: require('../../assets/projects/logo-melissa.png'),
                    title: "Melissa Andrade - Gestão de Clientes",
                    subtitle: "Gerenciamento de clientes de uma clínica de psicologia",
                    description: "<p>A ideia desse projeto surgiu no início do ano passado, quando minha esposa decidiu migrar da psicologia organizacional para a psicologia clínica. Ela precisava de alguma ferramenta que a ajudasse a organizar sua agenda de clientes, então aproveitei a oportunidade para treinar meus conhecimentos e criar uma aplicação 100% personalizada.</p>"
                        + "<p>Utilizei como base o projeto Melvid - Controle Financeiro, pois a estrutura do código já estava pronta, a partir daí definimos a identidade visual, palheta de cores, quais funcionalidades seriam necessárias para o início e como poderiamos evoluir.</p>"
                        + "<p>A estrutura é a mesma do projeto anterior, Laravel 9 como RestAPI utilizando dois containeres docker, e VueJS com Vuetify no front, o PostgreSQL ainda é o utilizando para armazenamento dos dados. Aproveitei o servidor da Google Cloud que eu já tinha para hospedar esse sistema também, somente precisando fazer o redirecionamento de portas para os subdomínios correspondentes.</p>",
                    images: [
                        {
                            file: require('../../assets/projects/melissa/melissa-calendario1.png'),
                            description: "Tela inicial, exibe o calendario de atendimentos, ao clicar em um item do calendário é possível ver mais informações sobre aquele cliente, adicionar uma nova sessão ou um registro de pagamento."
                        },
                        {
                            file: require('../../assets/projects/melissa/melissa-list-sessao.png'),
                            description: "A partir das informações do calendário é possível ver a lista de sessões de um determinado cliente"
                        },
                        {
                            file: require('../../assets/projects/melissa/melissa-add-sessao.png'),
                            description: "Modal de cadastro de sessão"
                        },
                        {
                            file: require('../../assets/projects/melissa/melissa-add-pagamento.png'),
                            description: "Modal de cadastro de pagamento"
                        },
                        {
                            file: require('../../assets/projects/melissa/melissa-calendario2.png'),
                            description: "Logo abaixo do calendário é possível observar as sessões que ainda não tem um prontuário montado, e sessões que ainda precisam ser estruturadas."
                        },
                        {
                            file: require('../../assets/projects/melissa/melissa-dashboard1.png'),
                            description: "Dashboard de acompanhamento, aqui é possível visualizar informações mês a mês, sobre o registro de sessões, registros financeiros, e também alertas sobre pagamentos atrasados, aniversarios, sessões do dia"
                        },
                        {
                            file: require('../../assets/projects/melissa/melissa-clientes.png'),
                            description: "CRUD de clientes"
                        },
                        {
                            file: require('../../assets/projects/melissa/melissa-recibos.png'),
                            description: "Através do sistema é possível gerar recibos para os clientes, de acordo com o valor que foi pago durante o mês"
                        },
                        {
                            file: require('../../assets/projects/melissa/melissa-recibos2.png'),
                            description: "Modal de geração dos recibos"
                        },
                        {
                            file: require('../../assets/projects/melissa/melissa-recibos3.png'),
                            description: "É possível filtrar os recibos que já foram gerados, e fazer o download novamente dos arquivos"
                        },
                        {
                            file: require('../../assets/projects/melissa/melissa-sessoes.png'),
                            description: "CRUD de sessões"
                        },
                        {
                            file: require('../../assets/projects/melissa/melissa-programadas.png'),
                            description: "CRUD de despesas programadas"
                        }
                        
                    ],
                    tools: [
                        {
                            icon: "mdi-language-php",
                            title: "PHP 8",
                            color: "#4f5b93"
                        },
                        {
                            icon: "mdi-sass",
                            title: "SASS",
                            color: "#cf649a"
                        },
                        {
                            icon: "mdi-language-javascript",
                            title: "JavaScript",
                            color: "#f7df1e"
                        },
                        {
                            icon: "mdi-database",
                            title: "PostgreSQL",
                            color: "#316193"
                        },
                        {
                            icon: "mdi-api",
                            title: "RestAPI",
                            color: "primary"
                        },
                        {
                            icon: "mdi-laravel",
                            title: "Laravel",
                            color: "#ff2d20"
                        },
                        {
                            icon: "mdi-vuejs",
                            title: "VueJS",
                            color: "#00b981"
                        },
                        {
                            icon: "mdi-vuetify",
                            title: "Vuetify",
                            color: "#7bc6ff"
                        },
                        {
                            icon: "mdi-github",
                            title: "GitHub",
                            color: "black"
                        },
                        {
                            icon: "mdi-docker",
                            title: "Docker",
                            color: "#099cec"
                        }
                    ]
                },
                {
                    show: false,
                    logo: require('../../assets/projects/logo-melvid.png'),
                    title: "Melvid - Controle Financeiro",
                    subtitle: "Sistema de controle financeiro pessoal (Laravel + VueJS + PostgreSQL + GCloud)",
                    description: "<p>Assim como muitas pessoas fazem, eu realizada o controle financeiro pessoal utilizando planilhas, mas manutenção e manipulação dos dados exigia muito tempo e esforço.</p>"
                        + "<p>Tentei utilizar os aplicativos já existentes como por exemplo o Mobills, mas a forma como a aplicação controla as informações não se adequava à minha rotina financeira, foi então que em 2021 decidi criar uma aplicação personalizada para o meu dia a dia.</p>"
                        + "<p>A aplicação foi construída utilizando no Back-end o Laravel 9 com os conceitos de RestAPI, utilizando dois containeres docker, um para a aplicação e outro como servidor nginx. Já o Front-end foi desenvolvido utilizando VueJS 2 e a biblioteca Vuetify para utilização dos componentes. Por fim, o armazenamento dos dados fica a cargo do PostgreSQL.</p>"
                        + "<p>Todo o conjunto da aplicação foi inserido em um servidor GoogleCloud, onde eu posso controlar os recursos que seão utilizados.</p>",
                    images: [
                        {
                            file: require('../../assets/projects/melvid/melvid-dashboard1.png'),
                            description: "Dashboard do sistema, aqui é possível acompanhar todas as receitas e despesas, futuras e atuais, além das despesas de cartões e saldos."
                        },
                        {
                            file: require('../../assets/projects/melvid/melvid-dashboard2.png'),
                            description: "Grafico de acompanhamento mensal da dashboard."
                        },
                        {
                            file: require('../../assets/projects/melvid/melvid-cadastro-despesa.png'),
                            description: "Modal de inserção de registro de cartão de crédito"
                        },
                        {
                            file: require('../../assets/projects/melvid/melvid-cartoes.png'),
                            description: "CRUD de cartões"
                        },
                        {
                            file: require('../../assets/projects/melvid/melvid-contas.png'),
                            description: "CRUD de contas"
                        },
                        {
                            file: require('../../assets/projects/melvid/melvid-planejamento.png'),
                            description: "Planejamento de orçamento mensal para cada categoria de registros"
                        },
                        {
                            file: require('../../assets/projects/melvid/melvid-resumo1.png'),
                            description: "Resumo das despesas mensais de cada categoria"
                        },
                        {
                            file: require('../../assets/projects/melvid/melvid-resumo2.png'),
                            description: "Resumo das despesas mensais de cada categoria e sub-categoria"
                        }
                        
                    ],
                    tools: [
                        {
                            icon: "mdi-language-php",
                            title: "PHP 8",
                            color: "#4f5b93"
                        },
                        {
                            icon: "mdi-sass",
                            title: "SASS",
                            color: "#cf649a"
                        },
                        {
                            icon: "mdi-language-javascript",
                            title: "JavaScript",
                            color: "#f7df1e"
                        },
                        {
                            icon: "mdi-database",
                            title: "PostgreSQL",
                            color: "#316193"
                        },
                        {
                            icon: "mdi-api",
                            title: "RestAPI",
                            color: "primary"
                        },
                        {
                            icon: "mdi-laravel",
                            title: "Laravel",
                            color: "#ff2d20"
                        },
                        {
                            icon: "mdi-vuejs",
                            title: "VueJS",
                            color: "#00b981"
                        },
                        {
                            icon: "mdi-vuetify",
                            title: "Vuetify",
                            color: "#7bc6ff"
                        },
                        {
                            icon: "mdi-github",
                            title: "GitHub",
                            color: "black"
                        },
                        {
                            icon: "mdi-docker",
                            title: "Docker",
                            color: "#099cec"
                        }
                    ]
                },
                {
                    show: false,
                    logo: require("../../assets/experiences/logo_transmai.png"),
                    title: "Transmai Transportes",
                    subtitle: "Projeto envolvendo três aplicações sendo duas web e uma mobile",
                    description: "<p>Esse projeto foi solicitado por uma empresa de transportes que já tinha uma rotina de funcionamento fazendo o controle de cargas e da frota era gerenciado através de planilhas. A empresa chegou a analisar sistemas já existentes mas nenhum deles se adaptou à sua rotina.</p>"
                        + "<p>A primeira aplicação solicitada foi para o gerenciamento de cargas e da frota, para isso foi preciso participar do dia a dia da empresa para entender o funcionamento da operação. Após realizar a análise, comecei a construir o sistema, fazendo entregas contínuas e realizando alterações solicitadas. O processo todo de desenvolvimento durou cerca de 3 meses. Essa aplicação foi construída utilizando PostgreSQL para armazenamento dos dados, e PHP com ZendFramework para interface do usuário.</p>"
                        + "<p>A segunda aplicação trata-se de uma aplicação mobile para que os motoristas possam informar o status da viagem e acompanhar a liberação de cargas. Para construir essa aplicação precisei direcionar meus estudos para tecnologias mobile, na época eu tinha mais conhecimento sobre Java então decidi utilizar o Java nativo para Android. Foi necessário também a construção de uma API para que o app pudesse se comunicar, essa API foi construida com PHP e Laravel, acessando o banco de dados já existente em PostgreSQL.</p>"
                        + "<p>A terceira a plicação também foi web, um sistema para realizar o controle financeiro da empresa, onde os dados se integravam com as informações de cargas e frota que eram inseridas através do outro sistema. Essa aplicação foi construída em VueJS e utilizou como backend a API construída para o aplicativo mobile.</p>"
                        + "<p>As imagens do sistema não puderam ser disponibilizadas por questões constratuais.</p>",
                    tools: [
                        {
                            icon: "mdi-language-php",
                            title: "PHP 7",
                            color: "#4f5b93"
                        },
                        {
                            icon: "mdi-application-braces",
                            title: "Smarty Template",
                            color: "primary"
                        },
                        {
                            icon: "mdi-zend",
                            title: "Zend Framework",
                            color: "#68b604"
                        },
                        {
                            icon: "mdi-jquery",
                            title: "JQuery",
                            color: "#1069ae"
                        },
                        {
                            icon: "mdi-language-html5",
                            title: "HTML 5",
                            color: "#e44d26"
                        },
                        {
                            icon: "mdi-language-css3",
                            title: "CSS 3",
                            color: "#1993c6"
                        },
                        {
                            icon: "mdi-language-javascript",
                            title: "JavaScript",
                            color: "#f7df1e"
                        },
                        {
                            icon: "mdi-database",
                            title: "PostgreSQL",
                            color: "#316193"
                        },
                        {
                            icon: "mdi-api",
                            title: "RestAPI",
                            color: "primary"
                        },
                        {
                            icon: "mdi-language-java",
                            title: "Java Android",
                            color: "#eb1f24"
                        },
                        {
                            icon: "mdi-laravel",
                            title: "Laravel",
                            color: "#ff2d20"
                        },
                        {
                            icon: "mdi-vuejs",
                            title: "VueJS",
                            color: "#00b981"
                        },
                        {
                            icon: "mdi-github",
                            title: "GitHub",
                            color: "black"
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        openImageModal(imageSrc, imageDescription) {
            this.selected_image = imageSrc;
            this.selected_description = imageDescription;
            this.image_modal = true;
        },
        closeImageModal() {
            this.selected_image = null;
            this.selected_description = null;
            this.image_modal = false;
        }
    }
};
</script>