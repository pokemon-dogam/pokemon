<script setup lang="ts">
// useStore, and computed 자동 임포트
const store = useStore()
const count = computed(() => store.count)
const props = defineProps<{
  msg: string
  optionalProp?: number
}>()

function increment() {
  store.increment()
}
</script>

<template>
  <h2 class="!mt-0">{{ props.msg }}</h2>
  <button class="px-3 py-2 bg-white border border-gray-300 rounded-md shadow" @click="increment">
    카운트: {{ count }}
  </button>
  <p><code>components/HelloWorld.vue</code> 수정을 통해 Vite HMR 테스트해보십셔.</p>
</template>
