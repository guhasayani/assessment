import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstDisplayComponent } from './firstdisplay/firstdisplay.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';

const routes: Routes = [
  {path: '', component: FirstDisplayComponent},
  {path: 'OrderDetail', component: OrderdetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
