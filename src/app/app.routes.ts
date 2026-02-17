import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main-page/main-page').then((m) => m.MainPage),
  },
  {
    path: 'blog',
    loadComponent: () => import('./blog/blog').then((m) => m.Blog),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about').then((m) => m.About),
  },

  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then((m) => m.NotFound),
  },
];
