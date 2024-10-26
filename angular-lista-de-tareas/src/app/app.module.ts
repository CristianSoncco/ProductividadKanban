// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';  // Importa MatCardModule
import { MatToolbarModule } from '@angular/material/toolbar'; // Importa MatToolbarModule
import { DragDropModule } from '@angular/cdk/drag-drop';  // Importa DragDropModule

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, BrowserAnimationsModule, MatIconModule,
    MatFormFieldModule,  // Agregar aquí MatFormFieldModule
    MatInputModule,       // Agregar aquí MatInputModule
    MatCardModule,  // Agrega MatCardModule aquí
    MatToolbarModule, // Agrega MatToolbarModule
    DragDropModule  // Agrega DragDropModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
