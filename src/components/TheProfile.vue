<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="light-green rounded-t-lg">
                <v-row justify="center">
                    <v-col cols="auto">
                        <v-avatar size="200">
                            <v-img 
                                position="top center"
                                src="../assets/david.jpg"
                            ></v-img>
                        </v-avatar>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="auto">
                        <h1>David N. Santos</h1>
                    </v-col>
                </v-row>
                <v-row justify="center" no-gutters>
                    <v-col cols="auto">
                        Full Stack Web Developer
                    </v-col>
                </v-row>
                <v-row justify="center" no-gutters class="mt-5">
                    <v-col cols="auto">
                        <v-btn text x-small href="https://wa.me/5541997463830" target="_blank">
                            <v-icon small>mdi-whatsapp</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn text x-small href="mailto:david_nunesantos@hotmail.com" target="_blank">
                            <v-icon small>mdi-email</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn text x-small href="https://www.facebook.com/david.nunesantos/" target="_blank">
                            <v-icon small>mdi-facebook</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn text x-small href="https://www.linkedin.com/in/david-nunes-dos-santos/" target="_blank">
                            <v-icon small>mdi-linkedin</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn text x-small href="https://github.com/davidnunesantos" target="_blank">
                            <v-icon small>mdi-github</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" class="white rounded-b-lg">
                <v-row justify="center" no-gutters>
                    <v-col cols="auto">
                        <v-btn color="dark-grey white--text" rounded href="https://davidnunesantos.github.io/public/files/DAVID%20NUNES%20DOS%20SANTOS.pdf" target="_blank">
                            <v-icon left>mdi-file-download</v-icon>
                            Baixar currículo
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>