<template>
  <div class="px-[4%] 2xl:px-[9%] z-50 sticky top-0 py-2">
    <div
    class="h-[70px] w-full flex justify-between items-center 2xl:text-lg gap-2 shadow-md backdrop-blur-md bg-[#7474747a] py-3 px-5 rounded-lg">
    <nuxt-link to="/" class="rounded-md h-full">
      <img src="/assets/image/logo/logoDark-removebg-preview.png" alt="" class="h-full">
    </nuxt-link>
      <div class="space-y-1.5 group ">
        <p class="bg-white w-8 h-[3px]"></p>
        <p class="bg-white w-8 h-[3px] group-hover:w-5 duration-500 delay-200"></p>
        <p class="bg-white w-8 h-[3px] group-hover:w-3 duration-500 "></p>
      </div>
  </div>
  </div>
  
  <div @click="store.navbarDrop = false" class="block lg:hidden bg-[#ffffffea] px-[5%] absolute w-full backdrop-blur-sm z-40 duration-300" :class="navBar == true ? 'translate-y-0' : 'translate-y-[-100%]'">
    <!-- <nuxt-link to="/" class="py-2 px-1 2xl:px-3 rounded-md flex items-center">
      Home
    </nuxt-link>
    <nuxt-link to="/Shop" class="py-2 px-1 2xl:px-3 rounded-md flex items-center">Shop</nuxt-link>
    <nuxt-link to="/Home/Event" class="py-2 px-1 2xl:px-3 rounded-md flex items-center">New Arrival</nuxt-link>
    <nuxt-link to="/Home/Event" class="py-2 px-1 2xl:px-3 rounded-md flex items-center">Sale/Clearance</nuxt-link>
    <nuxt-link to="/Home/Blog" class="py-2 px-1 2xl:px-3 rounded-md flex items-center">Blog</nuxt-link>
    <nuxt-link to="/Home/Blog" class="py-2 px-1 2xl:px-3 rounded-md flex items-center">Contact</nuxt-link> -->


  </div>
</template>
<style scoped>
a:hover {
  color: #8e95ff;
}

.router-link-active {
  color: #8e95ff;
}
</style>

<script setup>
import { ref } from "vue";
import {useProductStore} from '/store/index.js'
const searchBar = ref(false);
const store = useProductStore()

const navBar = ref(false)
</script>
