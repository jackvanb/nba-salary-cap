import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapSpaceComponent } from './cap-space/cap-space.component';
import { TeamCapComponent } from './team-cap/team-cap.component';

const routes: Routes = [
  {
    path: 'team',
    component: TeamCapComponent,
  },
  {
    path: '**',
    component: CapSpaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
