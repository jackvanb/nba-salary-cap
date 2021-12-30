import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapSpaceComponent } from './cap-space/cap-space.component';

const routes: Routes = [{ path: '**', component: CapSpaceComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
