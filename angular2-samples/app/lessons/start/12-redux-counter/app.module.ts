/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree. 
 *
 */

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  createStore,
  Store,
  StoreEnhancer
} from 'redux';
import { counterReducer } from './counter-reducer';
import { AppState } from './app-state';
import { AppStore } from './app-store';
import CounterComponent from './CounterComponent';

let devtools: StoreEnhancer<AppState> =
  window['devToolsExtension'] ?
  window['devToolsExtension']() : f => f;

let store: Store<AppState> = createStore<AppState>(
  counterReducer,
  devtools
);

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [ BrowserModule ],
  bootstrap: [ CounterComponent ],
  providers: [
    {provide: AppStore, useValue: store }
  ]

})
export class AppModule{}
