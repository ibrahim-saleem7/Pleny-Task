import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
// import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'home',
    component: MainLayoutComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/main/main.module').then(m => m.MainModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
