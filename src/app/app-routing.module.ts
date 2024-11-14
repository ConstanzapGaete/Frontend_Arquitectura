import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SignUpPageModule } from './Pages/authen/sign-up/sign-up.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'authen',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./Pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'e404',
    loadChildren: () =>
      import('./Pages/e404/e404.module').then((m) => m.E404PageModule),
  },
  {
    path: 'authen',
    loadChildren: () =>
      import('./Pages/authen/authen.module').then(
        (m) => m.AuthenPageModule
      ),
  },
  {
    path: 'homep',
    loadChildren: () => import('./Pages/homep/homep.module').then( m => m.HomepPageModule)
  },
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
