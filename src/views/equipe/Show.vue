<template>
  <div class="bg-gray-800 min-h-screen flex items-center justify-center">
    <div class="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-xl font-semibold text-white mb-4">{{ equipe.nom }}</h2>
      <p class="text-gray-300 mb-2">Ville: {{ equipe.ville }}</p>
      <p class="text-gray-300 mb-2">Responsable: {{ equipe.responsable }}</p>
      <div class="equipe-show__image">
        <img :src="getImageUrl(equipe.image)" alt="Image de l'équipe" class="w-full rounded-lg" />
      </div>
      <router-link to="/equipe" class="text-blue-500 hover:underline mt-4 inline-block">
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
const equipe = ref(null);

const getImageUrl = (imageName) => {
  return `/img/equipes/${imageName}`;
};

onBeforeMount(async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/equipes/${props.id}`);
    equipe.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<style>
/* Pas besoin de styles ici, tout est géré via Tailwind CSS */
</style>
