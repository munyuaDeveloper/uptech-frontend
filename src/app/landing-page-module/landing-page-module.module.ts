import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageModuleRoutingModule } from './landing-page-module-routing.module';
import { OutletComponent } from './outlet/outlet.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    OutletComponent,
    LandingPageComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    LandingPageModuleRoutingModule
  ]
})
export class LandingPageModuleModule { }
