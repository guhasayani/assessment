import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'OrderDetail', component: OrderdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
