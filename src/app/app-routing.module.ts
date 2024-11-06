const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Pages/login/login.module').then((m) => m.LoginPageModule),
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
    path: 'registrar',
    loadChildren: () =>
      import('./Pages/registrar/registrar.module').then(
        (m) => m.RegistrarPageModule
      ),
  },
  {
    path: 'olvidacontrase',
    loadChildren: () =>
      import('./Pages/olvidacontrase/olvidacontrase.module').then(
        (m) => m.OlvidacontrasePageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
