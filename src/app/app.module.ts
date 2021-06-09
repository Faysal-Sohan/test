
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    MatCarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
