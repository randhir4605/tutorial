import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { VerticalNavigationSideBarComponent } from './vertical-navigation-side-bar/vertical-navigation-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    VerticalNavigationSideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
