import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => loadRemoteModule('mfe1', './Component').then(m => m.ProductListComponent)
  }
];
