import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { HomeComponent } from './home/home.component';
import { MyCanvasComponent } from './my-canvas/my-canvas.component';


const routes: Routes = [
  { path : 'home' , component : HomeComponent},
  { path : 'edit/:Id' , component : EditEmpComponent},
  { path : 'addemp' , component : AddEmpComponent},
  { path : 'canvas' , component: MyCanvasComponent},
  { path: '**' , component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export let routingComponents = [
                                HomeComponent,
                                EditEmpComponent,
                                AddEmpComponent,
                                MyCanvasComponent
                                ]
