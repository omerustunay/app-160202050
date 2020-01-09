import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'portal',
    loadChildren: './portal/portal.module#PortalModule'
  },
  {
    path: 'player',
    loadChildren: './player/player.module#PlayerModule'
  },
  { path: 'login', 
  loadChildren: './login/login.module#LoginPageModule'
  },
  { path: 'register', 
  loadChildren: './register/register.module#RegisterPageModule'
  },
  { path: 'HesapEkrani',
   loadChildren: './Hesap/HesapEkrani/hesap-ekrani.module#HesapEkraniPageModule' 
  },
  { path: 'Borcekrani',
   loadChildren: './Hesap/Borcekrani/borc-ekrani.module#BorcEkraniPageModule' 
  },
  { path: 'durum-ekrani',
   loadChildren: './Hesap/durum-ekrani/durum-ekrani.module#DurumEkraniPageModule' 
  },
  { path: 'product',
   loadChildren: './product/product.module#ProductPageModule'
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
