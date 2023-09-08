import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/count.reducer';
import { TestComponent } from './test/test.component';
import { TestForNgrxComponent } from './test-for-ngrx/test-for-ngrx.component';

@NgModule({
  declarations: [AppComponent, TestComponent, TestForNgrxComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    StoreModule.forRoot({ count: counterReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
