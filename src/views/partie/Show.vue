<template>
  <div class="bg-gray-800 min-h-screen flex items-center justify-center">
    <div class="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-96">
      <p class="text-lg font-semibold">{{ formatDate(partie.date) }}</p>
      <p class="text-sm text-gray-400 mt-2">{{ formattedTime(partie.heure) }}</p>
      <p class="mt-4">{{ partie.ville }}</p>
      <p class="text-sm text-gray-400">{{ partie.endroit }}</p>
      <p class="mt-4">
        <strong class="text-xl">{{ partie.nom_premiere_equipe }} vs {{ partie.nom_deuxieme_equipe }}</strong>
      </p>
      <router-link to="/partie" class="text-blue-500 hover:underline mt-4 inline-block">
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
const partie = ref(null);

onBeforeMount(async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/parties/${props.id}`);
    partie.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

const formattedTime = (timeString) => {
  const date = new Date(`1970-01-01T${timeString}`);
  const formatted = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return formatted;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString(undefined, options);
};
</script>

<style>
/* Pas besoin de styles ici, tout est géré via Tailwind CSS */
</style>
