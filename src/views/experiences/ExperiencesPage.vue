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
                        fill-dot
                        color="#52796f"
                    >
                        <v-card class="elevation-2">
                            <v-card-title>{{ item.position }}</v-card-title>
                            <v-card-subtitle>{{ item.period }}</v-card-subtitle>
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12">
                                        <p>
                                            <span class="black--text" v-html="item.description" />
                                        </p>
                                    </v-col>
                                </v-row>
                                <v-row no-gutters class="mt-2">
                                    <v-col cols="12" sm="6">
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                <b>Principais Soft Skills</b>
                                            </v-col>
                                            <v-col v-for="(skill, k) in item.softskills" cols="auto" class="pa-1" :key="k">
                                                <v-chip color="#52796f" small class="white--text">
                                                    <v-icon left small>{{ skill.icon }}</v-icon>
                                                    <span>{{ skill.title }}</span>
                                                </v-chip>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                <b>Principais Hard Skills</b>
                                            </v-col>
                                            <v-col v-for="(skill, k) in item.hardskills" cols="auto" class="pa-1" :key="k">
                                                <v-chip color="#2B2D42" small class="white--text">
                                                    <v-icon left small>{{ skill.icon }}</v-icon>
                                                    <span>{{ skill.title }}</span>
                                                </v-chip>
                                            </v-col>
                                        </v-row>
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
                            position: "Squad Leader (Inteligência Artificial)",
                            period: "Março de 2024 até o momento",
                            description: "Atualmente lidero um time focado em inteligência artificial, coordenando projetos de chatbots e IA preditiva com tecnologias como Watson, Java, Spring e ReactJS. Sou responsável por conduzir cerimônias ágeis, monitorar KPIs, controlar a DRE da área e capacitar a equipe. Também faço a gestão do backlog e preparo relatórios semanais para a diretoria, mantendo o foco em inovação e eficiência operacional.",
                            softskills: [
                                {
                                    icon: "mdi-account-group",
                                    title: "Liderança de Equipe"
                                },
                                {
                                    icon: "mdi-comment-processing",
                                    title: "Comunicação Eficaz"
                                },
                                {
                                    icon: "mdi-bug-check",
                                    title: "Resolução de Problemas"
                                },
                                {
                                    icon: "mdi-chart-line",
                                    title: "Gestão de DRE e KPIs"
                                },
                                {
                                    icon: "mdi-sprout",
                                    title: "Mentoria e Desenvolvimento de Pessoas"
                                },
                                {
                                    icon: "mdi-account-group",
                                    title: "Gestão de Performance da Equipe"
                                }
                            ],
                            hardskills: [
                                {
                                    icon: "mdi-forum",
                                    title: "Watson (IA Conversacional)"
                                },
                                {
                                    icon: "mdi-language-java",
                                    title: "Java (Spring)"
                                },
                                {
                                    icon: "mdi-react",
                                    title: "ReactJS"
                                },
                                {
                                    icon: "mdi-docker",
                                    title: "Docker"
                                },
                                {
                                    icon: "mdi-kubernetes",
                                    title: "Kubernetes"
                                },
                                {
                                    icon: "mdi-view-column",
                                    title: "Kanban"
                                },
                                {
                                    icon: "mdi-restore",
                                    title: "Scrum"
                                },
                                {
                                    icon: "mdi-refresh-auto",
                                    title: "Arquitetura de Sistemas e Automação"
                                }
                            ]
                        },
                        {
                            position: "Squad Leader (Front-end)",
                            period: "Novembro de 2023 à Março de 2024",
                            description: "Gerenciei um time de desenvolvimento front-end, implementando soluções com VueJS e outras tecnologias web. Conduzi cerimônias Scrum, garantindo entregas de alta qualidade e promovendo o desenvolvimento profissional da equipe. Fui responsável por definir padrões de design e boas práticas, gerenciar o backlog e acompanhar a performance do time, sempre em busca de otimização e inovação.",
                            softskills: [
                                {
                                    icon: "mdi-account-group",
                                    title: "Gestão de Performance da Equipe"
                                },
                                {
                                    icon: "mdi-comment-quote",
                                    title: "Feedback Constante"
                                },
                                {
                                    icon: "mdi-comment-processing",
                                    title: "Comunicação Eficaz"
                                },
                                {
                                    icon: "mdi-bullseye-arrow",
                                    title: "Orientação para Resultados"
                                },
                                {
                                    icon: "mdi-map-marker-path",
                                    title: "Planejamento Estratégico"
                                }
                            ],
                            hardskills: [
                                {
                                    icon: "mdi-language-php",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-vuejs",
                                    title: "VueJS"
                                },
                                {
                                    icon: "mdi-restore",
                                    title: "Scrum"
                                },
                                {
                                    icon: "mdi-cogs",
                                    title: "Design Patterns"
                                },
                                {
                                    icon: "mdi-account-group",
                                    title: "Gestão de Performance da Equipe"
                                },
                            ]
                        },
                        {
                            position: "Tech Leader",
                            period: "Abril de 2022 à Novembro de 2023",
                            description: "Como Tech Leader, assumi a responsabilidade técnica dos painéis de mensageria, garantindo uma arquitetura de sistemas eficiente e a automação de processos com Docker e CI/CD. Liderei o desenvolvimento de rotinas automatizadas, criação de pipelines e melhorias de performance, além de apoiar a capacitação da equipe e monitoramento de KPIs. Também fui a principal referência técnica do time e colaborei na coordenação e evolução do grupo.",
                            softskills: [
                                {
                                    icon: "mdi-account-group",
                                    title: "Liderança de Equipe"
                                },
                                {
                                    icon: "mdi-lightbulb-on",
                                    title: "Tomada de Decisão Estratégica"
                                },
                                {
                                    icon: "mdi-chess-rook",
                                    title: "Pensamento Estratégico"
                                },
                                {
                                    icon: "mdi-bug-check",
                                    title: "Resolução de Problemas"
                                },
                                {
                                    icon: "mdi-handshake",
                                    title: "Colaboração e Trabalho em Equipe"
                                }
                            ],
                            hardskills: [
                                {
                                    icon: "mdi-language-php",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-vuejs",
                                    title: "VueJS"
                                },
                                {
                                    icon: "mdi-cogs",
                                    title: "CI/CD"
                                },
                                {
                                    icon: "mdi-cogs",
                                    title: "Design Repositories"
                                },
                                {
                                    icon: "mdi-cogs",
                                    title: "Design Patterns"
                                },
                                {
                                    icon: "mdi-drawing-box",
                                    title: "Design System"
                                },
                                {
                                    icon: "mdi-poll",
                                    title: "Arquitetura de Alta Disponibilidade"
                                },
                            ]
                        },
                        {
                            position: "Analista de Sistemas Sênior",
                            period: "Fevereiro de 2021 à Abril de 2022",
                            description: "No time de mensageria, desenvolvi e aperfeiçoei painéis de gerenciamento de SMS, e-mail e RCS. Trabalhei com Laravel e VueJS, implementei melhorias de performance e realizei análises de bugs e correções. Participei de reuniões estratégicas e contribui ativamente para a definição do roadmap de produto, agregando valor às decisões do time.",
                            softskills: [
                                {
                                    icon: "mdi-handshake",
                                    title: "Colaboração e Trabalho em Equipe"
                                },
                                {
                                    icon: "mdi-bug-check",
                                    title: "Resolução de Problemas"
                                },
                                {
                                    icon: "mdi-wave",
                                    title: "Adaptabilidade e Flexibilidade"
                                },
                                {
                                    icon: "mdi-rocket-launch",
                                    title: "Proatividade"
                                }
                            ],
                            hardskills: [
                                {
                                    icon: "mdi-language-php",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-vuejs",
                                    title: "VueJS"
                                },
                                {
                                    icon: "mdi-laravel",
                                    title: "Laravel"
                                },
                                {
                                    icon: "mdi-atom",
                                    title: "Atomic Design"
                                },
                                {
                                    icon: "mdi-sass",
                                    title: "SASS (SCSS)"
                                },
                                {
                                    icon: "mdi-restore",
                                    title: "Scrum"
                                },
                            ]
                        },
                        {
                            position: "Analista de Sistemas Pleno",
                            period: "Janeiro de 2020 à Fevereiro de 2021",
                            description: "No portal de negociação da empresa, usei Laravel para desenvolver e manter funcionalidades, trabalhando com um analista sênior. Focava em garantir qualidade de código e eficiência nas entregas. Também apoiei a integração de novas tecnologias e metodologias, otimizando o sistema e promovendo uma melhoria contínua.",
                            softskills: [
                                {
                                    icon: "mdi-handshake",
                                    title: "Colaboração e Trabalho em Equipe"
                                },
                                {
                                    icon: "mdi-comment-processing",
                                    title: "Comunicação Técnica"
                                },
                            ],
                            hardskills: [
                                {
                                    icon: "mdi-language-php",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-laravel",
                                    title: "Laravel"
                                },
                                {
                                    icon: "mdi-api",
                                    title: "RESTful API"
                                },
                                {
                                    icon: "mdi-api",
                                    title: "SOAP API"
                                },
                                {
                                    icon: "mdi-database-outline",
                                    title: "MySQL"
                                },
                                {
                                    icon: "mdi-docker",
                                    title: "Docker"
                                },
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
                            description: "Liderei o desenvolvimento de APIs REST para integrar sistemas internos usando PHP e ZendFramework. Cuidei da manutenção e aprimoramento dos painéis web e planejei atividades junto ao gerente de TI. Desenvolvi soluções sob medida e treinei estagiários, apoiando o crescimento da equipe e assegurando continuidade nos projetos.",
                            softskills: [
                                {
                                    icon: "mdi-circle",
                                    title: "Autonomia"
                                },
                                {
                                    icon: "mdi-circle",
                                    title: "Capacidade de Treinamento"
                                },
                                {
                                    icon: "mdi-circle",
                                    title: "Planejamento de Atividades"
                                },
                            ],
                            hardskills: [
                                {
                                    icon: "mdi-language-php",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-zend",
                                    title: "ZendFramework"
                                },
                                {
                                    icon: "mdi-api",
                                    title: "RESTful API"
                                },
                                {
                                    icon: "mdi-database",
                                    title: "PostgreSQL"
                                },
                                {
                                    icon: "mdi-application-outline",
                                    title: "Smarty Template"
                                },
                                {
                                    icon: "mdi-bootstrap",
                                    title: "Bootstrap"
                                },
                            ]
                        },
                        {
                            position: "Programador Júnior",
                            period: "Março de 2018 à Dezembro de 2018",
                            description: "Minha responsabilidade era corrigir bugs e desenvolver novas funcionalidades nos sistemas web, utilizando PHP e PostgreSQL. Com o tempo, assumi mais responsabilidades no desenvolvimento e colaborei com o time de TI para criar integrações e melhorar a experiência dos clientes.",
                            softskills: [
                                {
                                    icon: "mdi-circle",
                                    title: "Colaboração em Equipe"
                                },
                                {
                                    icon: "mdi-circle",
                                    title: "Resiliência e Aprendizado Contínuo"
                                },
                            ],
                            hardskills: [
                                {
                                    icon: "mdi-language-php",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-zend",
                                    title: "ZendFramework"
                                },
                                {
                                    icon: "mdi-database",
                                    title: "PostgreSQL"
                                },
                                {
                                    icon: "mdi-bug",
                                    title: "Correção de Bugs"
                                },
                                {
                                    icon: "mdi-web",
                                    title: "Desenvolvimento Web"
                                },
                                {
                                    icon: "mdi-web-plus",
                                    title: "Integrações de Sistemas"
                                },
                                {
                                    icon: "mdi-application-outline",
                                    title: "Smarty Template"
                                },
                                {
                                    icon: "mdi-bootstrap",
                                    title: "Bootstrap"
                                },
                            ]
                        },
                        {
                            position: "Estagiário de Desenvolvimento Web",
                            period: "Outubro de 2017 à Março de 2018",
                            description: "Após demonstrar bom desempenho no suporte, fui promovido para a equipe de desenvolvimento. Trabalhei na manutenção e melhoria de sistemas internos, aprendendo PHP, ZendFramework e PostgreSQL. Essa experiência me deu uma sólida base em desenvolvimento web e integração de sistemas, além de me preparar para funções de maior responsabilidade.",
                            softskills: [
                                {
                                    icon: "mdi-circle",
                                    title: "Aprendizado Rápido"
                                },
                                {
                                    icon: "mdi-circle",
                                    title: "Atenção aos Detalhes"
                                },
                            ],
                            hardskills: [
                                {
                                    icon: "mdi-language-php",
                                    title: "PHP"
                                },
                                {
                                    icon: "mdi-zend",
                                    title: "ZendFramework"
                                },
                                {
                                    icon: "mdi-web",
                                    title: "Manutenção de Sistemas Internos"
                                },
                            ]
                        },
                        {
                            position: "Estagiário de Suporte Técnico",
                            period: "Março de 2017 à Outubro de 2017",
                            description: "Iniciei minha carreira no suporte técnico, auxiliando clientes na instalação e configuração de máquinas de venda automática para aceitar pagamentos eletrônicos. Nesse papel, adquiri experiência em atendimento ao cliente e solução de problemas técnicos. Essa etapa foi fundamental para meu desenvolvimento profissional, proporcionando uma base sólida para minha transição para o desenvolvimento de software.",
                            softskills: [
                                {
                                    icon: "mdi-circle",
                                    title: "Comunicação com Clientes"
                                },
                                {
                                    icon: "mdi-circle",
                                    title: "Resolução de Problemas Técnicos"
                                },
                                {
                                    icon: "mdi-circle",
                                    title: "Atendimento ao Cliente"
                                },
                            ],
                            hardskills: [
                                {
                                    icon: "mdi-circle",
                                    title: "Instalação e Configuração de Equipamentos"
                                },
                                {
                                    icon: "mdi-circle",
                                    title: "Suporte Técnico"
                                },
                                {
                                    icon: "mdi-circle",
                                    title: "Conhecimento em Vending Machines"
                                },
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
</script>