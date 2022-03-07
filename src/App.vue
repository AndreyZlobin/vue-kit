<template>
  <img alt='Vue logo' src='./assets/logo.png' />
  <HelloWorld />
  <p>{{counter}}</p>
  <button @click='increment'>inc</button>
  <button @click='decrement'>dec</button>
</template>

<script setup lang='ts'>
import { useGlobalStore } from '@core/store';
import { storeToRefs } from 'pinia';

import HelloWorld from './components/HelloWorld.vue';

const store = useGlobalStore();
const { counter } = storeToRefs(store);

const increment = () => {
  store.increment();
};
const decrement = () => {
  store.decrement();
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
