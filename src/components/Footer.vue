<template>
    <footer class="bg-gray-700 text-white py-8">
      <div class="container mx-auto text-center">
        <div class="flex justify-center space-x-4">
          <router-link :to="{ name: 'accueil' }" class="text-gray-400 hover:text-white">
            Accueil
          </router-link>
          <router-link :to="{ name: 'partie.index' }" class="text-gray-400 hover:text-white">
            Parties
          </router-link>
          <router-link :to="{ name: 'equipe.index' }" class="text-gray-400 hover:text-white">
            Équipes
          </router-link>
          <router-link :to="{ name: 'joueur.index' }" class="text-gray-400 hover:text-white">
            Joueurs
          </router-link>
        </div>
        <p class="mt-4 text-gray-400">&copy; {{ currentYear }} Tous droits réservés</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  
  const currentYear = new Date().getFullYear();
  </script>
  