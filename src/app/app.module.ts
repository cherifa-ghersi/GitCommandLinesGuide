import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProblemComponent } from './problem/problem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material';
import { SolutionComponent } from './solution/solution.component';
import {MatSelectModule} from '@angular/material/select';
import { NgTypedModule } from 'ng-typed';


@NgModule({
  declarations: [
    AppComponent,
    ProblemComponent,
    SolutionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    NgTypedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
