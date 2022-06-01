import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboarComponent } from './dashboar.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DashboarComponent
  }
]

@NgModule({
  declarations: [DashboarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
