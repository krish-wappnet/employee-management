import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Employee } from './employees.reducer';

export const selectEmployeesState = createFeatureSelector<Employee[]>('employees');

export const selectAllEmployees = createSelector(
  selectEmployeesState,
  (employees) => employees
);
