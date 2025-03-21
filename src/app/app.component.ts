import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './employees/dashboard/dashboard.component';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DashboardComponent,
    MatButtonModule,
    MatDialogModule, // For dialog functionality
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee-management';

  constructor(private dialog: MatDialog) {}

  openEmployeeForm() {
    this.dialog.open(EmployeeFormComponent, {
      width: '500px', // Set dialog width
      disableClose: true, // Prevent closing by clicking outside (optional)
    });
  }
}