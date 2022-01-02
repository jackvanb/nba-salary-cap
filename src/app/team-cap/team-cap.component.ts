import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface PlayerCapSpace {
  playerName: string;
  salary: string;
  capFigure: string;
  capPercentage: string;
}

@Component({
  selector: 'team-cap',
  templateUrl: './team-cap.component.html',
  styleUrls: ['./team-cap.component.scss'],
})
export class TeamCapComponent implements OnInit {
  teamName: string | null = null;
  teamCode: string | null = null;
  teamCapSpace: PlayerCapSpace[] = [];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private cloudFunctions: AngularFireFunctions
  ) {}

  ngOnInit(): void {
    this.teamName = this.route.snapshot.queryParamMap.get('team');
    this.teamCode = this.route.snapshot.queryParamMap.get('teamCode');
    this.getTeamCapSpace();
  }

  private async getTeamCapSpace(): Promise<void> {
    const callableCapSpace = this.cloudFunctions.httpsCallable('teamCapSpace');
    this.teamCapSpace = await callableCapSpace({
      teamName: this.teamName,
    }).toPromise();
    this.isLoading = false;
  }
}
