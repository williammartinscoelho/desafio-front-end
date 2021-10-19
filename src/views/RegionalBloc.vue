<template>
    <v-container>
        <h1 class="mb-3">Blocos Regionais</h1>

        <v-row>
            <v-col cols="12" md="6">
                <v-btn
                    class="mb-3"
                    v-for="el in regionalBlocs"
                    :key="el.sigla"
                    block
                    elevation="2"
                    outlined
                    @click="handleClick({regionalBloc:el.sigla, name:el.name})"
                >
                    {{ el.name }}
                </v-btn>
            </v-col>

            <v-col cols="12" md="6">
                <h4>{{ nameRegionalBlocSelected }}</h4>

                <v-list>
                    <v-list-item
                        v-for="el in dataRegionalBlocSelected"
                        :key="el.numericCode"
                        three-line
                    >
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ el.name }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                Latitude: {{ el.latlng[0] }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                Longitude: {{ el.latlng[1] }}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>

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

            regionalBlocs: [
                {
                    name: "European Union",
                    sigla: "EU",
                },
                {
                    name: "European Free Trade Association",
                    sigla: "EFTA",
                },
                {
                    name: "Caribbean Community",
                    sigla: "CARICOM",
                },
                {
                    name: "Pacific Alliance",
                    sigla: "PA",
                },
                {
                    name: "African Union",
                    sigla: "AU",
                },
                {
                    name: "Union of South American Nations",
                    sigla: "USAN",
                },
                {
                    name: "Eurasian Economic Union",
                    sigla: "EEU",
                },
                {
                    name: "Arab League",
                    sigla: "AL",
                },
                {
                    name: "Association of Southeast Asian Nations",
                    sigla: "ASEAN",
                },
                {
                    name: "Central American Integration System",
                    sigla: "CAIS",
                },
                {
                    name: "Central European Free Trade Agreement",
                    sigla: "CEFTA",
                },
                {
                    name: "North American Free Trade Agreement",
                    sigla: "NAFTA",
                },
                {
                    name: "South Asian Association for Regional Cooperation",
                    sigla: "SAARC",
                },
            ],

            dataRegionalBlocSelected: [],
            nameRegionalBlocSelected: ""
        };
    },
    methods: {
        handleClick: async function ({regionalBloc, name}) {
            this.loadingApi = true;

            this.nameRegionalBlocSelected = name

            const response = await api.getRegionalBloc({
                regionalbloc: regionalBloc,
            });
            this.dataRegionalBlocSelected = response;

            this.loadingApi = false;
        },
    },
};
</script>

<style>
</style>