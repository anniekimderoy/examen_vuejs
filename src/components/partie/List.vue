<template>
  <div class="bg-gray-100 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-2xl font-semibold text-gray-800 mb-4">Prochaines parties de hockey cosom</h1>
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Heure
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ville
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Endroit
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Équipe 1
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Équipe 2
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(partie, index) in parties" :key="partie.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                {{ partie.date }}
                <div class="mt-2">
                  <router-link :to="{ name: 'partie.show', params: { id: partie.id } }" class="text-blue-500">
                    Infos du match
                  </router-link>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{ formattedTime(partie.heure) }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ partie.ville }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ partie.endroit }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <router-link :to="{ name: 'equipe.show', params: { id: partie.premiere_equipe_id } }" class="text-blue-500">
                  {{ partie.nom_premiere_equipe }}
                </router-link>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <router-link :to="{ name: 'equipe.show', params: { id: partie.deuxieme_equipe_id } }" class="text-blue-500">
                  {{ partie.nom_deuxieme_equipe }}
                </router-link>
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
  parties: {
    type: Array,
    default: () => [],
  },
});

const formattedTime = (timeString) => {
  const date = new Date(`1970-01-01T${timeString}`);
  const formatted = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return formatted;
};
</script>
