import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-team-cap',
  templateUrl: './team-cap.component.html',
  styleUrls: ['./team-cap.component.scss'],
})
export class TeamCapComponent implements OnInit {
  teamName: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.teamName = this.route.snapshot.paramMap.get('team');
  }
}
