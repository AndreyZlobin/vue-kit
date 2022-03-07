import { router } from '@core/router';
import { SetupPlugin } from '@core/types';

export const install: SetupPlugin = (app) => {
  app.use(router);
};
