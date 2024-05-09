import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table'
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { GmTableColumns, GmTableInterface } from '../../interfaces/gm-table.interface';
import { MainService } from '../../main.service';
import { ToolbarComponent } from '../../toolbar/toolbar.component';

@Component({
  selector: 'gm-table',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTooltipModule,
    RouterLink
  ],
  templateUrl: './gm-table.component.html',
  styleUrl: './gm-table.component.scss'
})
export class GmTableComponent implements OnInit {
  readonly idTabella: number = 1;
  
  route: ActivatedRoute = inject(ActivatedRoute);
  displayedColumns: string[] = GmTableColumns.concat(['openDettaglio']);
  dataSource!: MatTableDataSource<GmTableInterface>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private service: MainService) {
    ToolbarComponent.staticTabIndex = 1;
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<GmTableInterface>(this.service.getTable(this.idTabella));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}