
<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ counter }}</button>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@core/store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const store = useGlobalStore();

const props = defineProps<{ msg: string }>();
const { counter } = storeToRefs(store);


const count = ref(0);

</script>
