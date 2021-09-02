import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataBase } from "../in-memory-database";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,   
    //utilizado apenas para requisições internas, em beckend real, remover import
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataBase)
  ],
  exports: [
    //modulos compartilhados por todos
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ]
})
export class CoreModule { }
