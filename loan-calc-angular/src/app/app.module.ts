import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {AppMaterialModule} from './material.module';

// Loan Components
import { LoanFormComponent } from './components/loan-form/loan-form.component';
import { LoanAmortizationComponent } from './components/loan-amortization/loan-amortization.component';
import { LoanAmortizationSummaryComponent } from './components/loan-amortization-summary/loan-amortization-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanFormComponent,
    LoanAmortizationComponent,
    LoanAmortizationSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
