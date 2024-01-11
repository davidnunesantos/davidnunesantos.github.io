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
                        
                    ]
                },
                {
                    show: false,
                    logo: require("../../assets/experiences/logo_transmai.png"),
                    title: "Transmai Transportes",
                    subtitle: "Projeto envolvendo três aplicações sendo duas web e uma mobile",
                    description: "",
                    images: [
                        {
                            file: require('../../assets/projects/melvid/melvid-dashboard1.png'),
                            description: "Dashboard do sistema, aqui é possível acompanhar todas as receitas e despesas, futuras e atuais, além das despesas de cartões e saldos."
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