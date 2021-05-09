import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VegetablelistComponent } from './vegetablelist/vegetablelist.component';
import { CoursesComponent } from './courses/courses.component';
import { FlowerslistComponent } from './flowerslist/flowerslist.component';
import { GadgetlistComponent } from './gadgetlist/gadgetlist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'courses-list', component: CoursesComponent },
  { path: 'vegetable-list', component: VegetablelistComponent },
  { path: 'flowers-list', component: FlowerslistComponent },
  { path: 'gadget-list', component: GadgetlistComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
