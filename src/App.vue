<script setup>
import TheHeader from "./components/TheHeader.vue";
import BacToTop from "./components/BackToTop.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <TheHeader/>
  <RouterView/>
  <TheFooter/>
  <BacToTop/>
</template>
