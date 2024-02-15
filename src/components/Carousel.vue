<template>
  <div class="carousel">
    <vueper-slides autoplay :autoplay-interval="5000">
      <vueper-slide v-for="(slide, i) in slides" :key="i" :content="slide.content">
      </vueper-slide>
    </vueper-slides>
  </div>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
  {
    content: '<img src="img/claudio-schwarz-Efgocb5Y0J4-unsplash.jpg" alt="Hockey Cosom">'
  },
  {
    content: '<img src="img/claudio-schwarz-Zy68nOS5y8s-unsplash.jpg" alt="Hockey Cosom">'
  },
  {
    content: '<img src="img/pexels-patrick-case-3737554.jpg" alt="Hockey Cosom">'
  }
];
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
}
</style>
