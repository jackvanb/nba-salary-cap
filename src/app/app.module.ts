import { AngularFireModule } from '@angular/fire/compat';
import {
  AngularFireFunctionsModule,
  USE_EMULATOR,
  ORIGIN,
} from '@angular/fire/compat/functions';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapTableComponent } from './cap-space/cap-table/cap-table.component';
import { CapSpaceComponent } from './cap-space/cap-space.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, CapTableComponent, CapSpaceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireFunctionsModule,
  ],
  providers: [
    {
      provide: USE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 5001] : undefined,
    },
    { provide: ORIGIN, useValue: 'https://nba-salary-cap.web.app' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
