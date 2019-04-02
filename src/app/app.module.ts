import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HightlightDirective } from './hightlight.directive';
import { ShowMoviesDirective } from './show-movies.directive';

@NgModule({
  declarations: [
    AppComponent,
    HightlightDirective,
    ShowMoviesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
