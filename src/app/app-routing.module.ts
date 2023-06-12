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
  {
    path: 'select-action',
    loadChildren: () => import('./pages/select-action/select-action.module').then( m => m.SelectActionPageModule)
  },
  {
    path: 'add-horoscope',
    loadChildren: () => import('./pages/add-horoscope/add-horoscope.module').then( m => m.AddHoroscopePageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'delete-horoscope',
    loadChildren: () => import('./pages/delete-horoscope/delete-horoscope.module').then( m => m.DeleteHoroscopePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
