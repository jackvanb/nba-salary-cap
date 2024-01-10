import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';

import { teamNameToCode } from '../shared/constants';

export interface TeamCapSpace {
  teamCode?: string;
  teamName: string;
  totalCap: string;
  capSpace: string;
}

@Component({
  selector: 'cap-space',
  templateUrl: './cap-space.component.html',
  styleUrls: ['./cap-space.component.scss'],
})
export class CapSpaceComponent implements OnInit {
  capSpace: TeamCapSpace[] = [];
  isLoading = true;

  constructor(
    private cloudFunctions: AngularFireFunctions,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle(`NBA Salary Cap and Contracts Tracker`);
    this.meta.updateTag({
      name: 'description',
      content:
        'A real-time look at the salary cap space and salary cap totals for each NBA team.',
    });
    this.getCapSpace();
  }

  async getCapSpace(): Promise<void> {
    const callableCapSpace = this.cloudFunctions.httpsCallable('capSpace');
    this.capSpace = await firstValueFrom(callableCapSpace({}));
    // Set team code if not present.
    for (const team of this.capSpace) {
      if (!team.teamCode) {
        team.teamCode = teamNameToCode.get(team.teamName);
      }
    }
    this.isLoading = false;
  }
}
