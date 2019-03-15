import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import {LoginModule} from './login/login.module';
import {AccountModule} from './account/account.module';
import {SettingsModule} from './settings/settings.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {GenerateFormModule} from './generate-form/generate-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    LoginModule,
    AccountModule,
    SettingsModule,
    DashboardModule,
    GenerateFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
