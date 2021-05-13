// Modules Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
// Routing
import { AppRoutingModule } from './app.routing.module';


/* Components */
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routingComponents } from './app.routing.module';
import {MatSelectModule} from '@angular/material/select';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    routingComponents // -> All Components Pages
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  providers: [{
    provide:
    MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {
      appearance: "fill"
    }
  }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
