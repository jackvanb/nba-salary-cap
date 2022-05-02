import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

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
    private cloudFunctions: AngularFireFunctions,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.teamName = this.route.snapshot.data['team'];
    this.teamCode = this.route.snapshot.data['teamCode'];
    this.title.setTitle(`${this.teamName} 2022-23 Salary Cap Table`);
    this.meta.updateTag({
      name: 'description',
      content: `${this.teamName} 2022-23 salary cap table, including breakdowns of roster, salaries and cap figures.`,
    });
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
