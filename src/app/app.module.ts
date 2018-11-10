import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InitialComponent } from './initial/initial.component';
import { ServiceHttpComponent } from './service-http/service-http.component';
import { PracrouterComponent } from './pracrouter/pracrouter.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user', children: [
    {path: 'list', component: UserlistComponent, children: [
      {path: 'detail/:name', component: UserComponent}
    ]}
  ]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    ServiceHttpComponent,
    PracrouterComponent,
    HomeComponent,
    AboutComponent,
    UserlistComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
