import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {GetStarted} from './components/get-started/get-started';
import {SpringBootAutoConfiguration} from './components/spring-boot-auto-configuration/spring-boot-auto-configuration';

const routes: Routes = [
  {path:'get-started' , component:GetStarted},
  {path:'spring-boot-auto-configuration' , component:SpringBootAutoConfiguration},
  { path: '', redirectTo: '/format', pathMatch: 'full' }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
