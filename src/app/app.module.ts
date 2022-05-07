import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import {
  AngularFireFunctionsModule,
  USE_EMULATOR,
  ORIGIN,
} from '@angular/fire/compat/functions';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapTableComponent } from './cap-space/cap-table/cap-table.component';
import { CapSpaceComponent } from './cap-space/cap-space.component';
import { environment } from '../environments/environment';
import { TeamCapComponent } from './team-cap/team-cap.component';
import { TeamCapTableComponent } from './team-cap/team-cap-table/team-cap-table.component';

@NgModule({
  declarations: [AppComponent, CapTableComponent, CapSpaceComponent, TeamCapComponent, TeamCapTableComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatSortModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireFunctionsModule,
    AngularFireAnalyticsModule,
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
