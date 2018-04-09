// import { PayoutData } from './project-payout.interface';
import { PayoutService } from './payout.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

/* import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material'; */
import { ProjectPayoutComponent } from './project-payout/project-payout.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProjectPayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    /* MatFormFieldModule,
    MatInputModule,
    MatButtonModule, */
    ReactiveFormsModule
  ],
  providers: [PayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
