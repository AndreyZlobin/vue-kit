import { AppSelector } from '@core/types';
import { Component, createApp } from 'vue';

import App from './App.vue';


const start = (App: Component, rootSelector: AppSelector) => {
  const app = createApp(App);

  Object.values((import.meta.globEager("./plugins/*.ts"))).forEach((i) => i.install?.(app));
  app.mount(rootSelector);
};

start(App, '#app');
