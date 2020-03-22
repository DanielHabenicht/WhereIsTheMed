import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuardService } from '../auth-guard.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthGuardService],
    children: [
      { path: '', redirectTo: 'new-inquiry', pathMatch: 'full' },
      {
        path: 'new-inquiry',
        loadChildren: () => import('../pages/new-inquiry/new-inquiry.module').then(m => m.NewInquiryPageModule)
      },
      {
        path: 'inquiry-history',
        loadChildren: () =>
          import('../pages/inquiry-history/inquiry-history.module').then(m => m.InquiryHistoryPageModule)
      },
      {
        path: 'inquiry/:id',
        loadChildren: () => import('../pages/inquiry/inquiry.module').then(m => m.InquiryPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/new-inquiry',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/new-inquiry',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
