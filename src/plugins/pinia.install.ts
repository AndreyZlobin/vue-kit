import { SetupPlugin } from '@core/types';
import { createPinia } from 'pinia';

export const install: SetupPlugin = (app) => {
  const pinia = createPinia();

  app.use(pinia);
};
