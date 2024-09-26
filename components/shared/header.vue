<template>
  <div class="px-[4%] 2xl:px-[9%] z-40 fixed w-full top-0 py-2">
    <div
    class="h-[70px] w-full flex justify-between items-center 2xl:text-lg gap-2 shadow-md backdrop-blur-md bg-[#7474747a] py-3 px-5 rounded-lg">
    <nuxt-link to="/" class="rounded-md h-full">
      <img src="/assets/image/logo/logoDark-removebg-preview.png" alt="" class="h-full">
    </nuxt-link>
      <div @click="navbarDrop = true"  class="space-y-1.5 group ">
        <p class="bg-white w-8 h-[3px]"></p>
        <p class="bg-white w-8 h-[3px] group-hover:w-5 duration-500 delay-200"></p>
        <p class="bg-white w-8 h-[3px] group-hover:w-3 duration-500 "></p>
      </div>
  </div>
  </div>
  
  
  <div @click="navbarDrop = false" class="text-2xl text-white font-bold bg-[#030303c2]  px-[5%] fixed top-0 h-[100vh] w-full backdrop-blur-sm z-50 duration-500" :class="navbarDrop == false ? 'translate-y-[-100%]' : 'translate-y-0' ">
    <div class="flex flex-col justify-center items-center gap-5 size-full -mt-10">
      <p class="absolute top-[5%] right-[5%] hover:rotate-90 duration-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg></p>
      <a href="#Home" class="hover:text-gray-400 duration-500">Home</a>
      <a href="#About" class="hover:text-gray-400 duration-500">About</a>
      <a href="#Portfolio" class="hover:text-gray-400 duration-500">Portfolio</a>
      <!-- <a href="#Clients" class="hover:text-gray-400 duration-500">Clients</a> -->
      <a href="#Contact" class="hover:text-gray-400 duration-500">Contact</a>
    </div>
    
  </div>
</template>
<style scoped>
.router-link-active {
  color: #7e7e7e;
}
</style>

<script setup>
import {useProductStore} from '/store/index.js'
const store = useProductStore()
 const navbarDrop = ref(false)
</script>
