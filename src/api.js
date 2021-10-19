const BASE_URL_RESTCOUNTRIES = "https://restcountries.com"
const BASE_URL_BRASILAPI = "https://brasilapi.com.br/api"

const api = {
    async getCountry({ country }) {
        const response = await fetch(`${BASE_URL_RESTCOUNTRIES}/v3.1/name/${country}`)
        return await response.json();
    },

    async getRegionalBloc({ regionalbloc }) {
        const response = await fetch(`${BASE_URL_RESTCOUNTRIES}/v2/regionalbloc/${regionalbloc}`)
        return await response.json();
    },

    async getAllCountrys() {
        const response = await fetch(`${BASE_URL_RESTCOUNTRIES}/v3.1/all`)
        return await response.json();
    },

    async getCountrysByLanguage({language}) {
        const response = await fetch(`${BASE_URL_RESTCOUNTRIES}/v3.1/lang/${language}`)
        return await response.json();
    },

    async getCep({ cep }) {
        const response = await fetch(`${BASE_URL_BRASILAPI}/cep/v2/${cep}`)
        return await response.json();
    }
    
}

export default api;