import { AppSelector } from '@core/types';
import { App } from 'vue';

export type SetupPlugin = (app: App<AppSelector>) => void;
