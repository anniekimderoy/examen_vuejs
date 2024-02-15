<template>
  <div class="flex items-center justify-center h-screen">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="evt.submit">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="prenom">
          Prénom
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="prenom" type="text" v-model="joueur.prenom">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="nom">
          Nom
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nom" type="text" v-model="joueur.nom">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="position">
          Position
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="position" type="text" v-model="joueur.position">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="numero">
          Numéro
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="numero" type="text" v-model="joueur.numero">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="equipe_id">
          Équipe
        </label>
        <select
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="equipe_id" v-model="joueur.equipe_id">
          <option value="" disabled selected>Sélectionnez une équipe</option>
          <option v-for="equipe in uniqueEquipes" :key="equipe.equipe_id" :value="equipe.equipe_id">
            {{ equipe.equipe_nom }}
          </option>
        </select>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Envoyer
        </button>
      </div>
    </form>
  </div>
  <router-link to="/joueur"
    class="mt-4 inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Retour à la liste
  </router-link>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted, computed } from 'vue';
import axios from 'axios';

const props = defineProps({
  joueur: {
    type: Object,
    default: () => ({}),
  },
});
const emit = defineEmits(['submit']);
const joueur = ref(props.joueur);
const joueurEquipes = ref([]);
const evt = {
  submit: (e) => {
    e.preventDefault();
    emit('submit', joueur.value);
  },
};

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/joueurs_equipes/');
    joueurEquipes.value = response.data;
  } catch (error) {
    console.error('Error loading joueur equipes:', error);
  }
});

const uniqueEquipes = computed(() => {
  const uniqueMap = new Map();
  joueurEquipes.value.forEach((equipe) => {
    uniqueMap.set(equipe.equipe_nom, equipe);
  });
  return Array.from(uniqueMap.values());
});
</script>

<style></style>
