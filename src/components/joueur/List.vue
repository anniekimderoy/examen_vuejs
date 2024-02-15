<template>
  <div class="joueur-list bg-gray-100 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="search">
          Rechercher un joueur :
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="search" type="text" v-model="searchTerm" placeholder="Rechercher par prénom ou nom">
      </div>
      <router-link :to="{ name: 'joueur.create' }" class="text-blue-500 hover:underline mb-4 inline-block">
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Ajouter un joueur
        </button>
      </router-link>
      <table class="w-full border border-collapse border-gray-300 bg-white">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-2 px-4 text-left">Prénom</th>
            <th class="py-2 px-4 text-left">Nom</th>
            <th class="py-2 px-4 text-left">Équipe</th>
            <th class="py-2 px-4 text-left">Photo</th>
            <th class="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="joueur in filteredJoueurs" :key="joueur.id" class="hover:bg-gray-50 transition-colors">
            <td class="py-3 px-4">
              <router-link :to="{ name: 'joueur.show', params: { id: joueur.id } }" class="text-blue-500 hover:underline">
                {{ joueur.prenom }}
              </router-link>
            </td>
            <td class="py-3 px-4">
              <router-link :to="{ name: 'joueur.show', params: { id: joueur.id } }" class="text-blue-500 hover:underline">
                {{ joueur.nom }}
              </router-link>
            </td>
            <td class="py-3 px-4">
              <router-link :to="{ name: 'equipe.show', params: { id: joueur.equipe_id } }"
                class="text-blue-500 hover:underline">
                {{ joueur.equipe_nom }}
              </router-link>
            </td>
            <td class="py-3 px-4">
              <div class="image-container">
                <img :src="getImageUrl(joueur.image)" alt="Image du joueur" class="w-24 h-24 object-cover rounded-full" />
              </div>
            </td>
            <td class="py-3 px-4">
              <router-link :to="{ name: 'joueur.edit', params: { id: joueur.id } }" class="text-blue-500 hover:underline">
                <button
                  class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Modifier
                </button>
              </router-link>
              <button @click="evt.delete(joueur.id)"
                class="bg-red-500 hover:bg-red-600 text-white font-bold ml-5 py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';
import axios from 'axios';

const props = defineProps({
  joueurs: {
    type: Array,
    default: () => [],
  },
});

const searchTerm = ref('');

const filteredJoueurs = computed(() => {
  if (!searchTerm.value) {
    return props.joueurs;
  }

  const lowerSearchTerm = searchTerm.value.toLowerCase();

  return props.joueurs.filter(joueur => {
    return joueur.prenom.toLowerCase().includes(lowerSearchTerm) || joueur.nom.toLowerCase().includes(lowerSearchTerm);
  });
});

const getImageUrl = (imageName) => {
  return `/img/joueurs/${imageName}`;
};

const evt = {
  delete: async (id) => {
    if (!confirm("Voulez-vous vraiment supprimer ce joueur?")) return;
    try {
      await axios.delete("http://localhost:8000/api/joueurs/" + id);
      window.location.reload(); // Refresh the page after deletion
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
