<script setup lang="ts">
  defineProps<{
    typeImage: string;
  }>();
</script>

<template>
  <img
    :src="typeImage"
    alt="포켓몬 속성"
  />
</template>
