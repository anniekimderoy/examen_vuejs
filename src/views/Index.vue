<template>
    <div class="page-container bg-gray-900 text-white">
        <!-- Présentation de la ligue -->
        <section class="py-12">
            <div class="container mx-auto text-center">
                <h1 class="text-4xl font-bold mb-4">Bienvenue à la Ligue de Hockey Cosom Montréal</h1>
                <p class="text-lg mb-8">La meilleure expérience de hockey cosom en ville !</p>
                <router-link to="/partie"
                    class="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-full text-lg font-semibold transition duration-300">
                    Voir les prochains matchs
                </router-link>
            </div>
        </section>

        <!-- Carrousel d'images -->
        <div class="container mx-auto">
            <carousel />
        </div>

        <!-- Joueurs en vedette -->
        <section class="py-12 bg-gray-900">
            <div class="container mx-auto">
                <h2 class="text-3xl font-semibold text-white mb-4">Joueurs en vedette</h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div v-for="featuredJoueur in featuredJoueurs" :key="featuredJoueur.id"
                        class="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105">
                        <router-link :to="{ name: 'joueur.show', params: { id: featuredJoueur.id } }" class="w-full h-full">
                            <div class="relative w-full h-64 rounded-md overflow-hidden">
                                <img :src="getImageUrl(featuredJoueur.image)" alt="Joueur en vedette"
                                    class="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </router-link>
                        <h3 class="text-lg font-semibold text-green-400 mt-2">
                            <router-link :to="{ name: 'joueur.show', params: { id: featuredJoueur.id } }"
                                class="hover:underline">
                                ⭐ {{ featuredJoueur.prenom }} {{ featuredJoueur.nom }}
                            </router-link>
                        </h3>
                    </div>
                </div>
            </div>
        </section>

        <!-- Cartes pour les équipes, parties et joueurs -->
        <section class="py-12 bg-gray-900">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
                    <img src="img/team.jpg" alt="Équipes" class="w-full h-32 object-cover rounded-md" />
                    <h2 class="text-2xl font-semibold text-white my-2">Équipes</h2>
                    <p class="text-gray-400">Découvrez nos équipes et leurs joueurs.</p>
                    <router-link to="/equipe" class="text-green-400 hover:underline mt-4 block">
                        Voir les équipes
                    </router-link>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
                    <img src="img/calendrier.jpg" alt="Parties" class="w-full h-32 object-cover rounded-md" />
                    <h2 class="text-2xl font-semibold text-white my-2">Parties</h2>
                    <p class="text-gray-400">Consultez le calendrier de nos prochaines parties.</p>
                    <router-link to="/partie" class="text-green-400 hover:underline mt-4 block">
                        Voir les parties
                    </router-link>
                </div>
                <div class="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105">
                    <img src="img/joueurs.jpg" alt="Joueurs" class="w-full h-32 object-cover rounded-md" />
                    <h2 class="text-2xl font-semibold text-white my-2">Joueurs</h2>
                    <p class="text-gray-400">Rencontrez nos talentueux joueurs.</p>
                    <router-link to="/joueur" class="text-green-400 hover:underline mt-4 block">
                        Voir les joueurs
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>
  
<script>
import { ref, computed, onMounted } from 'vue';
import Carousel from '@/components/Carousel.vue';
import JoueursList from '@/components/joueur/List.vue';
import axios from 'axios';

export default {
    components: {
        Carousel,
        JoueursList,
    },
    setup() {
        const joueurs = ref([]);

        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/joueurs');
                joueurs.value = response.data;
            } catch (error) {
                console.error(error);
            }
        });

        const featuredJoueurs = computed(() => {
            const shuffledJoueurs = joueurs.value.slice().sort(() => 0.5 - Math.random());
            return shuffledJoueurs.slice(0, 4);
        });

        const getImageUrl = (imageName) => {
            return `/img/joueurs/${imageName}`;
        };

        return {
            joueurs,
            featuredJoueurs,
            getImageUrl,
        };
    },
};
</script>
  
<style scoped>
.page-container {
    padding: 20px;
}
</style>
