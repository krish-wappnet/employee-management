import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Employee } from '../employees.reducer';
import { deleteEmployee, updateEmployee } from '../employees.actions';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { selectAllEmployees } from '../employees.selectors';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    NgIf,
    MatPaginatorModule,
    MatSortModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'department', 'status', 'actions'];
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>([]); // Initialize with empty array
  employees$: Observable<Employee[]>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private store: Store) {
    this.employees$ = this.store.select(selectAllEmployees);
    this.employees$.subscribe(employees => {
      this.dataSource.data = employees ?? []; // Update dataSource when store changes
      console.log('Employees from store:', employees); // Debug log
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Connect paginator
    this.dataSource.sort = this.sort; // Connect sort
  }

  toggleStatus(employee: Employee) {
    const updatedEmployee = { ...employee, status: employee.status === 'Active' ? 'Inactive' : 'Active' };
    this.store.dispatch(updateEmployee({ employee: updatedEmployee }));
  }

  deleteEmployee(id: number) {
    this.store.dispatch(deleteEmployee({ id }));
  }
}