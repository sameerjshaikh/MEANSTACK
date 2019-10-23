import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MongodbComponent } from './Components/mongodb/mongodb.component';
import { EmpDetailComponent } from './Components/emp-detail/emp-detail.component';
import { NewEmpComponent } from './Components/new-emp/new-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    MongodbComponent,
    EmpDetailComponent,
    NewEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
