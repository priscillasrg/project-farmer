import { FarmerSearchComponent } from './farmer-search/farmer-search.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmerDetailComponent } from './farmer-detail/farmer-detail.component';


const routes: Routes = [
  {path: 'farmerSearch', component: FarmerSearchComponent},
  {path: 'farmerDetail', component: FarmerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
