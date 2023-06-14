<script setup>
import TheHeader from "./components/TheHeader.vue";
import BacToTop from "./components/BackToTop.vue";
import TheFooter from "./components/TheFooter.vue";
import { useRouter, useRoute } from 'vue-router'
import {onMounted} from "vue";

const router = useRouter()
const route = useRoute()

function isShow (){
  const paths = [ '/login']
  return paths.includes(route.path)
}

</script>

<template>
  <TheHeader  v-if="!isShow()"/>
  <RouterView/>
  <TheFooter  v-if="!isShow()"/>
  <BacToTop/>
</template>
