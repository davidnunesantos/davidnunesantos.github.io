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
                <p>Sou alegre, positivo e organizado! Gosto de desafios e estou sempre em busca de novos conhecimentos. Trabalho bem em equipe e busco concluir os objetivos do grupo.</p>
                <p>Em minhas horas vagas gosto de ver algum filme ou série, e jogar algum vídeo game com minha namorada. Também gosto de tocar teclado e conhecer lugares novos.</p>
                <p>Sempre gostei muito de tecnologia e ingressei no curso de ciência da computação assim que sai do ensino médio. No último ano do curso consegui um estágio em uma pequena empresa na área de tecnologia atuando como suporte técnico, em menos de um ano consegui uma oportunidade para colocar em prática meus conhecimentos em programação e fui para o setor de desenvolvimento como estagário nesta mesma empresa. Consegui desenvolver minha carreira e cheguei até o cargo de Programador Pleno, após algum tempo surgiu uma nova oportunidade com novos desafios que me brilhou os olhos, e agora estou na PGMais vivendo novos desafios e compartilhando experiências.</p>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="mt-5">
            <v-col>
                <span class="text-h6">Minhas habilidades</span>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row v-for="(skill, n) in skills" :key="n" no-gutters class="my-1">
                    <v-col cols="2">
                        <v-icon left>{{ skill.icon }}</v-icon>
                        {{ skill.name }}
                    </v-col>
                    <v-col>
                        <v-progress-linear :value="skill.value" height="10" rounded color="green"></v-progress-linear>
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
            skills: [
                { name: "PHP", value: 95, icon: "mdi-language-php" },
                { name: "Javascript", value: 95, icon: "mdi-language-javascript" },
                { name: "HTML 5", value: 95, icon: "mdi-language-html5" },
                { name: "CSS 5", value: 90, icon: "mdi-language-css3" },
                { name: "VueJS", value: 90, icon: "mdi-vuejs" },
                { name: "JQuery", value: 85, icon: "mdi-jquery" },
                { name: "RestAPI", value: 85, icon: "mdi-api" },
                { name: "PostgreSQL", value: 80, icon: "mdi-database" },
                { name: "MySQL", value: 80, icon: "mdi-database-outline" },
                { name: "Linux", value: 75, icon: "mdi-linux" },
                { name: "Android", value: 60, icon: "mdi-android" },
                { name: "Python", value: 30, icon: "mdi-language-python" },
            ]
        };
    }
};
</script>