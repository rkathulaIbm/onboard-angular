import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { OnboardDialogComponent } from './onboard-dialog/onboard-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AllAssociatesComponent } from './all-associates/all-associates.component';
import { CommonService } from './services/common.service';
import { HTTPInterceptor } from './interceptor/http-interceptor';
import { CommonConfig } from './config/common-config';
import { OnboardComponentComponent } from './onboarding/onboard-component/onboard-component.component';
import { OnboardingModule } from './onboarding/onboarding.module';
import { HomeComponent } from './gateway/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    OnboardDialogComponent,
    AllAssociatesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    OnboardingModule
  ],
  providers: [CommonService, CommonConfig,
    { provide: HTTP_INTERCEPTORS, useClass: HTTPInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
