<template>
  <div class="bg-gray-800 min-h-screen flex items-center justify-center">
    <div class="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-xl font-semibold text-white">{{ joueur.prenom }} {{ joueur.nom }}</h2>
      <p class="text-gray-300 mb-2">#{{ joueur.numero }}</p>
      <p class="text-gray-300 mb-2">Position: {{ joueur.position }}</p>
      <p class="text-gray-300 mb-4">Équipe: {{ joueur.equipe_nom }}</p>
      <div class="joueur-show__image">
        <img :src="getImageUrl(joueur.image)" alt="Image du joueur" class="w-full rounded-lg" />
      </div>
      <router-link :to="{ name: 'joueur.edit', params: { id: joueur.id } }" class="text-blue-500 hover:underline mt-4 inline-block mr-2">
        Modifier
      </router-link>
      <router-link to="/joueur" class="text-blue-500 hover:underline mt-2 inline-block">
        Retour à la liste
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, defineProps } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const props = defineProps({
  id: {
    type: [Number, String],
    required: true
  },
});

const router = useRouter();
const joueur = ref(null);

const getImageUrl = (imageName) => {
  return `/img/joueurs/${imageName}`;
};

onBeforeMount(async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/joueurs_equipes/${props.id}`);
    joueur.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>
/* Pas besoin de styles ici, tout est géré via Tailwind CSS */
</style>
