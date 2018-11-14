import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WarningAlertComponent } from './warning-alert/warning-alert.component'
import { AppComponent } from './app.component';
import { WarningErrorComponent } from './warning-error/warning-error.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    WarningErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
