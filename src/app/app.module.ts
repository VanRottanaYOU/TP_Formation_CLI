import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { EvenementComponent } from './evenement/evenement.component';
import { VariableComponent } from './variable/variable.component';
import { IfComponentComponent } from './if-component/if-component.component';
import { FortestComponent } from './fortest/fortest.component';
import { FormationItemComponent } from './formation-item/formation-item.component';
import { FormationItemOutPutComponent } from './formation-item-out-put/formation-item-out-put.component';


@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    InterpolateComponent,
    EvenementComponent,
    VariableComponent,
    IfComponentComponent,
    FortestComponent,
    FormationItemComponent,
    FormationItemOutPutComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
