<template>
    <v-container>
        <h1 class="mb-3">BRASIL</h1>
        <v-btn elevation="2" outlined @click="getCountry('brasil')">
            Obter informações
        </v-btn>

        <v-list three-line v-if="brazilInfo">
            <v-list-item>
                <v-list-item-avatar>
                    <v-img :src="brazilInfo.flags.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        {{ brazilInfo.name.nativeName.por.official }}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                        Moeda: {{ brazilInfo.currencies.BRL.name }}
                    </v-list-item-subtitle>

                    <v-list-item-subtitle>
                        Capital: {{ brazilInfo.capital[0] }}
                    </v-list-item-subtitle>

                    <v-list-item-subtitle>
                        Região: {{ brazilInfo.region }}
                    </v-list-item-subtitle>

                    <v-list-item-subtitle>
                        Sub-região: {{ brazilInfo.subregion }}
                    </v-list-item-subtitle>

                    <v-list-item-subtitle>
                        Continente: {{ brazilInfo.continents[0] }}
                    </v-list-item-subtitle>

                    <v-list-item-subtitle>
                        Lingua: {{ brazilInfo.languages.por }}
                    </v-list-item-subtitle>

                    <v-list-item-subtitle>
                        Area: {{ brazilInfo.area }}
                    </v-list-item-subtitle>

                    <v-list-item-subtitle>
                        População: {{ brazilInfo.population }}
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>

        <v-expansion-panels v-if="brazilInfo">
            <v-expansion-panel>
                <v-expansion-panel-header> Raw Code </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <pre>{{ brazilInfo }}</pre>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-overlay :value="loadingApi" z-index="9">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-container>
</template>

<script>
import api from "../api.js";

export default {
    data() {
        return {
            loadingApi: false,
            brazilInfo: null,
        };
    },
    methods: {
        getCountry: async function (country) {
            this.loadingApi = true;

            const response = await api.getCountry({ country: country });
            this.brazilInfo = response[0];

            this.loadingApi = false;
        },
    },
};
</script>

<style>
</style>