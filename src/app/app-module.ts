import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { GetStarted } from './components/get-started/get-started';
import {NgOptimizedImage} from '@angular/common';
import { SpringBootAutoConfiguration } from './components/spring-boot-auto-configuration/spring-boot-auto-configuration';

@NgModule({
  declarations: [
    App,
    GetStarted,
    SpringBootAutoConfiguration
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
