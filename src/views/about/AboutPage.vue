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
                <p>Sou alegre, positivo e organizado! Gosto de desafios e estou sempre em busca de novos conhecimentos. Trabalho bem em equipe, busco concluir os objetivos do grupo e gosto de ajudar a desenvolver as pessoas profissionalmente.</p>
                <p>Em minhas horas vagas gosto de ver algum filme ou série, e jogar algum vídeo game com minha esposa. Também gosto de tocar teclado e conhecer lugares novos.</p>
                <p>Sempre gostei muito de tecnologia e ingressei no curso de ciência da computação assim que sai do ensino médio. Tenho mais de 4 anos de experiência com desenvolvimento de sistemas Web e Mobile, estou sempre em busca de aprimorar meus conhecimentos e habilidares, estrando atualizado com as tendências tecnológicas do mercado. Atualmente trabalho em uma empresa de tecnologia onde tenho a liberdade de discutir e decidir junto com o time qual é o melhor caminho a ser seguido para implementar soluções.</p>
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
                { name: "VueJS", value: 95, icon: "mdi-vuejs" },
                { name: "Javascript", value: 95, icon: "mdi-language-javascript" },
                { name: "HTML 5", value: 95, icon: "mdi-language-html5" },
                { name: "JQuery", value: 93, icon: "mdi-jquery" },
                { name: "CSS 3", value: 90, icon: "mdi-language-css3" },
                { name: "RestAPI", value: 90, icon: "mdi-api" },
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