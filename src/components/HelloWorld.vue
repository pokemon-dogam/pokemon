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
  <button class="btn" @click="increment">
    카운트: {{ count }}
  </button>
  <p><code>components/HelloWorld.vue</code> 수정을 통해 Vite HMR 테스트해보십셔.</p>
  <label for="my-modal" class="btn btn-primary rounded-full">open modal</label>
  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
      <div class="modal-box">
          <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
          <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <div class="modal-action">
              <label for="my-modal" class="btn">Yay!</label>
          </div>
      </div>
  </div>
</template>
