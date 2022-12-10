import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageManagementComponent } from './image-management/image-management.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'image-management',
    pathMatch: 'prefix',
  },
  {
    path: 'image-management',
    component: ImageManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

export const pagesComponents = [
  ImageManagementComponent
]
