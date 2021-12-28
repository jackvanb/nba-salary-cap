import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Component } from '@angular/core';

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
export class CapSpaceComponent {
  capSpace: TeamCapSpace[] = [];

  constructor(private cloudFunctions: AngularFireFunctions) {}

  ngOnInit(): void {
    this.getCapSpace();
  }

  async getCapSpace(): Promise<void> {
    const callableCapSpace = this.cloudFunctions.httpsCallable('capSpace');
    this.capSpace = await callableCapSpace({}).toPromise();
  }
}
