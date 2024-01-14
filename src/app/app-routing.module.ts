import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapSpaceComponent } from './cap-space/cap-space.component';
import { TeamCapComponent } from './team-cap/team-cap.component';

const routes: Routes = [
  {
    path: 'hawks',
    component: TeamCapComponent,
    data: { team: 'Atlanta Hawks', teamCode: 'ATL' },
  },
  {
    path: 'nets',
    component: TeamCapComponent,
    data: { team: 'Brooklyn Nets', teamCode: 'BKN' },
  },
  {
    path: 'celtics',
    component: TeamCapComponent,
    data: { team: 'Boston Celtics', teamCode: 'BOS' },
  },
  {
    path: 'hornets',
    component: TeamCapComponent,
    data: { team: 'Charlotte Hornets', teamCode: 'CHA' },
  },
  {
    path: 'bulls',
    component: TeamCapComponent,
    data: { team: 'Chicago Bulls', teamCode: 'CHI' },
  },
  {
    path: 'cavaliers',
    component: TeamCapComponent,
    data: { team: 'Cleveland Cavaliers', teamCode: 'CLE' },
  },
  {
    path: 'mavericks',
    component: TeamCapComponent,
    data: { team: 'Dallas Mavericks', teamCode: 'DAL' },
  },
  {
    path: 'nuggets',
    component: TeamCapComponent,
    data: { team: 'Denver Nuggets', teamCode: 'DEN' },
  },
  {
    path: 'pistons',
    component: TeamCapComponent,
    data: { team: 'Detroit Pistons', teamCode: 'DET' },
  },
  {
    path: 'warriors',
    component: TeamCapComponent,
    data: { team: 'Golden State Warriors', teamCode: 'GSW' },
  },
  {
    path: 'rockets',
    component: TeamCapComponent,
    data: { team: 'Houston Rockets', teamCode: 'HOU' },
  },
  {
    path: 'pacers',
    component: TeamCapComponent,
    data: { team: 'Indiana Pacers', teamCode: 'IND' },
  },
  {
    path: 'clippers',
    component: TeamCapComponent,
    data: { team: 'LA Clippers', teamCode: 'LAC' },
  },
  {
    path: 'lakers',
    component: TeamCapComponent,
    data: { team: 'Los Angeles Lakers', teamCode: 'LAL' },
  },
  {
    path: 'grizzlies',
    component: TeamCapComponent,
    data: { team: 'Memphis Grizzlies', teamCode: 'MEM' },
  },
  {
    path: 'heat',
    component: TeamCapComponent,
    data: { team: 'Miami Heat', teamCode: 'MIA' },
  },
  {
    path: 'bucks',
    component: TeamCapComponent,
    data: { team: 'Milwaukee Bucks', teamCode: 'MIL' },
  },
  {
    path: 'timberwolves',
    component: TeamCapComponent,
    data: { team: 'Minnesota Timberwolves', teamCode: 'MIN' },
  },
  {
    path: 'pelicans',
    component: TeamCapComponent,
    data: { team: 'New Orleans Pelicans', teamCode: 'NOP' },
  },
  {
    path: 'knicks',
    component: TeamCapComponent,
    data: { team: 'New York Knicks', teamCode: 'NYK' },
  },
  {
    path: 'thunder',
    component: TeamCapComponent,
    data: { team: 'Oklahoma City Thunder', teamCode: 'OKC' },
  },
  {
    path: 'magic',
    component: TeamCapComponent,
    data: { team: 'Orlando Magic', teamCode: 'ORL' },
  },
  {
    path: '76ers',
    component: TeamCapComponent,
    data: { team: 'Philadelphia 76ers', teamCode: 'PHI' },
  },
  {
    path: 'suns',
    component: TeamCapComponent,
    data: { team: 'Phoenix Suns', teamCode: 'PHX' },
  },
  {
    path: 'blazers',
    component: TeamCapComponent,
    data: { team: 'Portland Trail Blazers', teamCode: 'POR' },
  },
  {
    path: 'kings',
    component: TeamCapComponent,
    data: { team: 'Sacramento Kings', teamCode: 'SAC' },
  },
  {
    path: 'spurs',
    component: TeamCapComponent,
    data: { team: 'San Antonio Spurs', teamCode: 'SAS' },
  },
  {
    path: 'raptors',
    component: TeamCapComponent,
    data: { team: 'Toronto Raptors', teamCode: 'TOR' },
  },
  {
    path: 'jazz',
    component: TeamCapComponent,
    data: { team: 'Utah Jazz', teamCode: 'UTH' },
  },
  {
    path: 'wizards',
    component: TeamCapComponent,
    data: { team: 'Washington Wizards', teamCode: 'WAS' },
  },
  {
    path: '**',
    component: CapSpaceComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
