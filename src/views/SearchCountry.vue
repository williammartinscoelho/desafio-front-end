<template>
    <v-container>
        <h1 class="mb-3">Busca por País</h1>

        <v-text-field
            v-model="inputText"
            @input="filterCountrys()"
            outlined
            placeholder="Digite aqui..."
        ></v-text-field>

        <v-row>
            <v-col cols="12" md="6">
                <v-list three-line v-if="countryFiltered">
                    <template v-for="(el, i) in countryFiltered">
                        <v-divider :key="`divider-${i}`"></v-divider>

                        <v-list-item :key="el.name.official">
                            <v-list-item-avatar>
                                <v-img :src="el.flags.png"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ el.name.common }}
                                </v-list-item-title>

                                <v-list-item-subtitle
                                    class="click"
                                    v-for="lang in el.languages"
                                    :key="lang"
                                    @click="getCountrysByLanguage(lang)"
                                >
                                    {{ lang }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
            </v-col>

            <v-col cols="12" md="6">
                <h4 v-if="countrysByLanguage">Idioma: {{ languageSelected }}</h4>
                
                <v-list v-if="countrysByLanguage">
                    <template v-for="(el, i) in countrysByLanguage">
                        <v-divider :key="`divider-${i}`"></v-divider>

                        <v-list-item :key="el.name.official">
                            <v-list-item-avatar>
                                <v-img :src="el.flags.png"></v-img>
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ el.name.common }}
                                </v-list-item-title>

                                <v-list-item-subtitle
                                    v-for="lang in el.languages"
                                    :key="lang"
                                >
                                    {{ lang }}
                                </v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                </v-list>
            </v-col>
        </v-row>

        <v-overlay :value="loadingAPi" z-index="9">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-container>
</template>

<script>
import api from "../api.js";

export default {
    data() {
        return {
            loadingAPi: false,
            inputText: "",
            allCountrys: null,
            countryFiltered: null,
            countrysByLanguage: null,
            languageSelected: "",
        };
    },
    mounted() {
        this.getAllCountrys();
    },
    methods: {
        getAllCountrys: async function () {
            this.loadingAPi = true;

            const response = await api.getAllCountrys();
            this.allCountrys = response;

            this.loadingAPi = false;
        },
        filterCountrys: function () {
            console.log(this.inputText);

            if (this.inputText === "") {
                this.countryFiltered = [];
            } else {
                const response = this.allCountrys.filter((element) => {
                    return (
                        element.name.common
                            .toLowerCase()
                            .indexOf(this.inputText.toLowerCase()) > -1
                    );
                });

                this.countryFiltered = response;
            }
        },
        getCountrysByLanguage: async function (language) {
            this.loadingAPi = true

            this.languageSelected = language
            const response = await api.getCountrysByLanguage({language: language})
            this.countrysByLanguage = response

            this.loadingAPi = false
        }
    },
};
</script>

<style scoped>
    .click {
        cursor: pointer;
    }
</style>