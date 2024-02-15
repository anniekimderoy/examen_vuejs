<template>
	<div class="component">
		<h1>Nouveau joueur</h1>
		<JoueurForm :joueur="joueur" @submit="submitForm" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import JoueurForm from '@/components/joueur/Form.vue';

const router = useRouter();
const joueur = ref({
    "prenom": "",
    "nom": "",
    "position": "",
    "numero": "",
    "image": "",
    "equipe_id": "",
});

const submitForm = async () => {
    const formEl = document.querySelector('.wait');
    if (formEl) {
        formEl.classList.add('wait');
    }

    try {
        const response = await axios.post('http://localhost:8000/api/joueurs', joueur.value);
        router.push({ name: 'joueur.index' });
    } catch (error) {
        console.error(error);
    }

    if (formEl) {
        formEl.classList.remove('wait');
    }
};
</script>
  
<style lang="scss"></style>
  