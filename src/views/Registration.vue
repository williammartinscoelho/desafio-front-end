<template>
    <v-form ref="form" v-model="formValid">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        label="Data de nascimento"
                        type="date"
                        v-model="date"
                        :rules="dateRules"
                        validate-on-blur
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        label="Nome completo"
                        v-model="name"
                        :rules="nameRules"
                        validate-on-blur
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        label="CPF"
                        v-model="cpf"
                        :rules="cpfRules"
                        validate-on-blur
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-select
                        label="Selecione uma especie"
                        v-model="selectedPetSpecie"
                        :items="petSpecies"
                        :rules="petSpeciesRules"
                        outlined
                    ></v-select>
                </v-col>

                <v-col cols="12" md="4">
                    <v-select
                        label="Selecione uma raça"
                        v-model="selectedPetBreed"
                        :items="petBreeds"
                        :rules="petBreedRules"
                        outlined
                    ></v-select>
                </v-col>

                <v-col v-if="selectedPetBreed === 'Outro'" cols="12" md="4">
                    <v-text-field
                        label="Raça do pet"
                        v-model="otherPetBreed"
                        :rules="otherPetBreedRules"
                        validate-on-blur
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        label="Renda mensal"
                        v-model="monthlyIncomeInput"
                        :rules="monthlyIncomedRules"
                        @keydown="formatCurrency($event)"
                        validate-on-blur
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        label="CEP"
                        maxlength="9"
                        v-model="address.cep"
                        :rules="address.cepRules"
                        :loading="loadingAddressApi"
                        @blur="getCepInfo"
                        @keydown="formatCEP($event)"
                        validate-on-blur
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        label="Rua"
                        v-model="address.street"
                        :rules="address.streetRules"
                        :disabled="loadingAddressApi"
                        validate-on-blur
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        label="Bairro"
                        v-model="address.neighborhood"
                        :rules="address.neighborhoodRules"
                        :disabled="loadingAddressApi"
                        validate-on-blur
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        label="Cidade"
                        v-model="address.city"
                        :rules="address.cityRules"
                        :disabled="loadingAddressApi"
                        validate-on-blur
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        label="Estado"
                        maxlength="2"
                        minlength="2"
                        v-model="address.state"
                        :rules="address.stateRules"
                        :disabled="loadingAddressApi"
                        validate-on-blur
                        outlined
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-btn elevation="2" outlined @click="submitForm">submit</v-btn>
        </v-container>

        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    Form Data
                </v-card-title>

                <v-card-text>
                    <pre>{{ formData }}</pre>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                        Fechar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-form>
</template>

<script>
import validate from "../utils/validators.js";
import api from "../api.js";

export default {
    data: () => ({
        formValid: true,
        dialog: false,

        date: "",
        dateRules: [
            (v) =>
                validate.minAge({ minAge: 18, date: v }) ||
                "Idade minima de 18 anos",
            (v) =>
                validate.maxAge({ maxAge: 65, date: v }) ||
                "Idade maxima de 65 anos",
        ],

        name: "",
        nameRules: [
            (v) => !!v || "Nome e sobrenome são obrigatorios",
            (v) =>
                v.trim().split(" ").length >= 2 ||
                "Nome e sobrenome é obrigatório",
        ],

        cpf: "",
        cpfRules: [
            (v) => !!v || "Este campo é obrigatório",
            (v) => validate.cpf({ cpf: v }) || "CPF invalido",
        ],

        selectedPetSpecie: "",
        petSpecies: ["Cão", "Gato"],
        petSpeciesRules: [(v) => !!v || "Este campo é obrigatório"],

        selectedPetBreed: "",
        petBreeds: [],
        petBreedRules: [(v) => !!v || "Este campo é obrigatório"],

        otherPetBreed: "",
        otherPetBreedRules: [(v) => !!v || "Este campo é obrigatório"],

        monthlyIncome: 0,
        monthlyIncomeInput: "",
        monthlyIncomeStr: "",
        monthlyIncomedRules: [
            (v) =>
                validate.minValue({ value: v, minValue: 1000 }) ||
                "Valor minimo de R$ 1000,00",
        ],

        address: {
            cep: "",
            cepRules: [(v) => !!v || "Este campo é obrigatório"],
            street: "",
            streetRules: [(v) => !!v || "Este campo é obrigatório"],
            neighborhood: "",
            neighborhoodRules: [(v) => !!v || "Este campo é obrigatório"],
            city: "",
            cityRules: [(v) => !!v || "Este campo é obrigatório"],
            state: "",
            stateRules: [(v) => !!v || "Este campo é obrigatório"],
        },

        loadingAddressApi: false,

        formData: null
    }),
    mounted() {},
    methods: {
        formatCurrency: function (event) {
            event.preventDefault();

            const acceptedKeys = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
            ];

            if (acceptedKeys.includes(event.key)) {
                this.monthlyIncomeStr += event.key;
            } else if (event.key === "Backspace") {
                this.monthlyIncomeStr = this.monthlyIncomeStr.slice(0, -1);
            }

            this.monthlyIncomeInput =
                "R$ " +
                (this.monthlyIncomeStr / 100).toFixed(2).replace(".", ",");
            this.monthlyIncome = this.monthlyIncomeStr / 100;
        },
        getCepInfo: async function () {
            if (!!this.address.cep) {
                this.loadingAddressApi = true;
                const response = await api.getCep({ cep: this.address.cep });

                this.address.street = response.street;
                this.address.neighborhood = response.neighborhood;
                this.address.city = response.city;
                this.address.state = response.state;

                this.loadingAddressApi = false;
            }
        },
        formatCEP: function (event) {
            const acceptedKeys = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "Backspace",
            ];

            if (acceptedKeys.includes(event.key)) {
                if (
                    this.address.cep.length === 5 &&
                    event.key !== "Backspace"
                ) {
                    this.address.cep = `${this.address.cep}-`;
                }
            } else {
                event.preventDefault();
            }
        },
        submitForm: function () {
            const response = this.$refs.form.validate();

            if (response) {
                this.formData = {
                    name: this.name,
                    date: this.date,
                    cpf: this.cpf,
                    petSpecie: this.selectedPetSpecie,
                    petBreed:
                        this.selectedPetBreed === "Outro"
                            ? this.otherPetBreed
                            : this.selectedPetBreed,
                    monthlyIncome: this.monthlyIncome,
                    address: {
                        cep: this.address.cep,
                        street: this.address.street,
                        neighborhood: this.address.neighborhood,
                        city: this.address.city,
                        state: this.address.state,
                    },
                };
                this.dialog = true
            }
        },
    },
    watch: {
        selectedPetSpecie: function (val, oldVal) {
            this.selectedPetBreed = "";

            if (val === "Cão") {
                this.petBreeds = [
                    "Akita",
                    "Beagle",
                    "Boxer",
                    "Chihuahua",
                    "Dálmata",
                ];
            } else if (val === "Gato") {
                this.petBreeds = [
                    "Persa",
                    "Siamês",
                    "Maine Coon",
                    "Angorá",
                    "Sphynx",
                ];
            }
            this.petBreeds = [...this.petBreeds, "Outro"];
        },
    },
};
</script>

<style>
</style>