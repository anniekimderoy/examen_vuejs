<template>
	<div class="component">
		<EquipeList :equipes="equipes" />
	</div>
</template>
  
<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import EquipeList from '@/components/equipe/List.vue';

const equipe = ref({
	"nom": "",
	"ville": "",
	"responsable": "",
});
const props = defineProps({
	// ...
});
const equipes = ref([]);

onBeforeMount(() => {
	axios('http://localhost:8000/api/equipes').then(response => {
		equipes.value = response.data;
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