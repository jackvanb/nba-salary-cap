import { Component, ViewChild, Input } from '@angular/core';
import { TeamCapSpace } from '../cap-space.component';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'cap-table',
  templateUrl: './cap-table.component.html',
  styleUrls: ['./cap-table.component.scss'],
})
export class CapTableComponent {
  @Input()
  teamCapSpace: TeamCapSpace[] = [];

  dataSource!: MatTableDataSource<TeamCapSpace>;
  displayedColumns = ['teamLogo', 'teamName', 'capSpace', 'totalCap'];

  @ViewChild(MatSort) sort!: MatSort;

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.teamCapSpace);
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = this.sortingDataAccessor;
    // Add default sort on cap space desc.
    if (this.sort) {
      this.sort.sort({ id: 'capSpace', start: 'asc' } as MatSortable);
    }
  }

  // Custom sort to handle dollar values.
  private sortingDataAccessor = (item: any, property: any) => {
    switch (property) {
      case 'capSpace':
      case 'totalCap':
        return Number(item[property].replace(/[^0-9.-]+/g, ''));
      default:
        return item[property];
    }
  };
}
