import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { VegetablelistComponent } from './vegetablelist/vegetablelist.component';
import { ElectroniclistComponent } from './electroniclist/electroniclist.component';
import { FlowerslistComponent } from './flowerslist/flowerslist.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GadgetlistComponent } from './gadgetlist/gadgetlist.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HeaderComponent,
    VegetablelistComponent,
    ElectroniclistComponent,
    FlowerslistComponent,
    FooterComponent,
    GadgetlistComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
