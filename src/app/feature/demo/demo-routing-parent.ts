import type { Routes } from '@angular/router';

export const DEMO_ROUTES: Routes = [
  {
    path: 'demo',
    loadChildren: () => {
      return import('@feature/demo/demo.module').then((m) => {
        return m.DemoModule;
      });
    },
  },
];
