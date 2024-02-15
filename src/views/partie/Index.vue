<template>
	<div class="component">
		<PartieList :parties="parties" />
	</div>
</template>
  
<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios';
import PartieList from '@/components/partie/List.vue';

const partie = ref({
	"date": "",
	"heure": "",
	"ville": "",
	"endroit": "",
  "nom_premiere_equipe": "",
  "nom_deuxieme_equipe": "",
	"premiere_equipe_id": "",
	"deuxieme_equipe_id": "",
});
const props = defineProps({
	// ...
});
const parties = ref([]);

onBeforeMount(() => {
	axios('http://localhost:8000/api/parties').then(response => {
		parties.value = response.data;
	});
})
</script>

<style lang="scss">
</style>