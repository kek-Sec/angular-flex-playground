import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxBootstrapMultiselectModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
