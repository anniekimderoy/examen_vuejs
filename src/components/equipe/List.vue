<template>
  <div class="equipe-list min-h-screen py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-semibold mb-6 text-white">Liste des équipes</h1>
      <div class="overflow-x-auto">
        <table class="w-full border-collapse border border-gray-600">
          <thead>
            <tr class="bg-gray-800">
              <th class="py-3 px-6 text-left text-white">Nom de l'équipe</th>
              <th class="py-3 px-6 text-left text-white">Image</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="equipe in equipes" :key="equipe.id" class="bg-gray-700 hover:bg-gray-600">
              <td class="py-4 px-6 text-white">
                <router-link :to="{ name: 'equipe.show', params: { id: equipe.id } }"
                  class="text-blue-400 hover:underline">
                  {{ equipe.nom }}
                </router-link>
              </td>
              <td class="py-4 px-6">
                <img :src="getImageUrl(equipe.image)" alt="Image de l'équipe"
                  class="h-16 w-16 object-cover rounded-full" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  equipes: {
    type: Array,
    default: () => [],
  },
});

const getImageUrl = (imageName) => {
  return `/img/equipes/${imageName}`;
};
</script>

<style scoped>
.equipe-list {
  padding: 20px;
}

table {
  width: 100%;
  border-spacing: 0;
}

th,
td {
  padding: 12px;
  text-align: left;
  vertical-align: middle;
}

th {
  font-weight: bold;
}

tr:nth-child(even) {
  background-color: #1a1a1a;
}</style>
