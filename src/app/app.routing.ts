import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SoundmoduleComponent } from './soundmodule/soundmodule.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'soundmodule',
    component: SoundmoduleComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
