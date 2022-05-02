import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface TeamCapSpace {
  teamCode: string;
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
  ) {
    this.getCapSpace();
  }

  ngOnInit() {
    this.meta.updateTag({
      name: 'description',
      content:
        'A real-time look at the salary cap space and salary cap totals for each NBA team.',
    });
  }

  async getCapSpace(): Promise<void> {
    const callableCapSpace = this.cloudFunctions.httpsCallable('capSpace');
    this.capSpace = await callableCapSpace({}).toPromise();
    this.isLoading = false;
  }
}
