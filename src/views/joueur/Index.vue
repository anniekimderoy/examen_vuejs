<template>
	<div class="component">
		<JoueurList :joueurs="joueurs" />
	</div>
</template>
  
<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import JoueurList from '@/components/joueur/List.vue';

const joueur = ref({
	"prenom": "",
	"nom": "",
	"position": "",
	"numero": "",
  "nom_equipe": "",
	"equipe_id": "",
});
const props = defineProps({
	// ...
});
const joueurs = ref([]);

onBeforeMount(() => {
	axios('http://localhost:8000/api/joueurs_equipes').then(response => {
		joueurs.value = response.data;
	});
})
</script>

<style lang="scss">
.component {
  padding: 2rem;

  button {
    background-color: #0c2b40;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e74c3c;
    }
  }
}
</style>