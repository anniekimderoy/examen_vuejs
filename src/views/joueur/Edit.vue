<template>
  <div class="component">
    <h1>Modifier un joueur</h1>
    <JoueurForm v-if="joueur" :joueur="joueur" :waiting="isWaiting" @submit="submitForm" />
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import JoueurForm from '@/components/joueur/Form.vue';

const router = useRouter();
const props = defineProps({
  id: {
    type: [Number, String],
    required: true,
  },
});
const joueur = ref(null);
const isWaiting = ref(false);

onBeforeMount(async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/joueurs/' + props.id);
    joueur.value = response.data;
  } catch (error) {
    console.log(error);
  }
});

const submitForm = async () => {
  if (!isWaiting.value) {
    isWaiting.value = true;
    try {
      const response = await axios.put(`http://localhost:8000/api/joueurs/${joueur.value.id}`, joueur.value);
      router.push({ name: 'joueur.show', params: { id: response.data.success.id } });
    } catch (error) {
      console.error(error);
    }
    isWaiting.value = false;
  }
};
</script>

<style lang="scss">
.component {
  padding: 2rem;

  h1 {
    font-size: 24px;
    margin-bottom: 1rem;
    color: #0c2b40;
  }
}
</style>
