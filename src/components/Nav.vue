<template>
	<nav class="bg-green-800 py-4">
	  <div class="container mx-auto flex justify-between items-center">
		<router-link :to="{ name: 'accueil' }" class="text-white text-xl font-semibold ml-4">
		  Hockey Cosom Montréal
		</router-link>
		<ul class="flex space-x-4 mr-4">
		  <li>
			<router-link :to="{ name: 'accueil' }" class="text-gray-300 hover:text-white">
			  Accueil
			</router-link>
		  </li>
		  <li>
			<router-link :to="{ name: 'partie.index' }" class="text-gray-300 hover:text-white">
			  Parties
			</router-link>
		  </li>
		  <li>
			<router-link :to="{ name: 'equipe.index' }" class="text-gray-300 hover:text-white">
			  Équipes
			</router-link>
		  </li>
		  <li>
			<router-link :to="{ name: 'joueur.index' }" class="text-gray-300 hover:text-white">
			  Joueurs
			</router-link>
		  </li>
		</ul>
	  </div>
	</nav>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  