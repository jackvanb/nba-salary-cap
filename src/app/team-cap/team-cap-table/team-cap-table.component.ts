import { Component, ViewChild, Input } from '@angular/core';
import { PlayerCapSpace } from '../team-cap.component';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'team-cap-table',
  templateUrl: './team-cap-table.component.html',
  styleUrls: ['./team-cap-table.component.scss'],
})
export class TeamCapTableComponent {
  @Input()
  teamCapSpace: PlayerCapSpace[] = [];

  dataSource!: MatTableDataSource<PlayerCapSpace>;
  displayedColumns = ['playerName', 'salary', 'capFigure', 'capPercentage'];

  @ViewChild(MatSort) sort!: MatSort;

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.teamCapSpace);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
    // Add default sort on cap space desc.
    if (this.sort) {
      this.sort.sort({ id: 'salary', start: 'desc' } as MatSortable);
    }
  }

  // Custom sort to handle dollar values.
  private sortingDataAccessor = (item: any, property: any) => {
    switch (property) {
      case 'salary':
      case 'capFigure':
        return Number(item[property].replace(/[^0-9.-]+/g, ''));
      default:
        return item[property];
    }
  };
}
