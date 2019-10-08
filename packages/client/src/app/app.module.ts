import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarAddComponent } from './car-add/car-add.component';
import { PintAddComponent } from './pint-add/pint-add.component';
import { MineComponent } from './mine/mine.component';
import { HomeComponent } from './home/home.component';
import { CarRouteComponent } from './car-route/car-route.component';
import { StepComponent } from './step/step.component';
import { AddressSelectComponent } from './address-select/address-select.component';
import { TimeSelectComponent } from './time-select/time-select.component';
import { MobileAddComponent } from './mobile-add/mobile-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetComponent } from './forget/forget.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarAddComponent,
    PintAddComponent,
    MineComponent,
    HomeComponent,
    CarRouteComponent,
    StepComponent,
    AddressSelectComponent,
    TimeSelectComponent,
    MobileAddComponent,
    LoginComponent,
    RegisterComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
