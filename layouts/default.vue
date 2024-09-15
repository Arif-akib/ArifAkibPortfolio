<script setup>
import {useProductStore} from '/store/index.js'
const store = useProductStore()

</script>
<template>
  <div class="max-w-[2000px] mx-auto">
    <SharedHeader />

    <div class="min-h-[100vh-80px] bg-black">
      <slot />
    </div>
    <SharedFooter />
  </div>
</template>

<style scoped></style>
