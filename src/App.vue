<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app color="primary" dark>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Desafio Front-end
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        William M. Coelho
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    :to="item.link"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            drawer: null,
            items: [
                { 
                    title: "Home", 
                    link: "/", 
                    icon: "mdi-view-dashboard" 
                },
                {
                    title: "Cadastro",
                    link: "/registration",
                    icon: "mdi-help-box",
                },
                {
                    title: "Brasil Info",
                    link: "/brazil",
                    icon: "mdi-book-information-variant",
                },
                {
                    title: "Blocos Regionais",
                    link: "/regional-bloc",
                    icon: "mdi-book-search",
                },
                {
                    title: "Busca por País",
                    link: "/search-country",
                    icon: "mdi-map-search",
                },
            ],
        };
    },
};
</script>