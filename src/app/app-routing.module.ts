import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'zodiacs',
    pathMatch: 'full'
  },
  {
    path: 'zodiacs',
    loadChildren: () => import('./pages/zodiacs/zodiacs.module').then( m => m.ZodiacsPageModule)
  },
  {
    path: 'zodiacs/:zodiacName',
    loadChildren: () => import('./pages/zodiacs-details/zodiacs-details.module').then( m => m.ZodiacsDetailsPageModule)
  },
  {
    path: 'zodiac-dateofbirth',
    loadChildren: () => import('./pages/zodiac-dateofbirth/zodiac-dateofbirth.module').then( m => m.ZodiacDateofbirthPageModule)
  },
  {
    path: 'zodiac-details-by-date',
    loadChildren: () => import('./pages/zodiac-details-by-date/zodiac-details-by-date.module').then( m => m.ZodiacDetailsByDatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
