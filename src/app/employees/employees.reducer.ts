import { createReducer, on } from '@ngrx/store';
import { addEmployee, updateEmployee, deleteEmployee } from './employees.actions';

export interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  status: 'Active' | 'Inactive';
}

export const initialState: Employee[] = [];

export const employeesReducer = createReducer(
  initialState,
  on(addEmployee, (state, { employee }) => {
    const newId = state.length > 0 ? Math.max(...state.map(emp => emp.id)) + 1 : 1; // Ensure unique IDs
    return [...state, { ...employee, id: newId }];
  }),
  on(updateEmployee, (state, { employee }) => 
    state.map(emp => (emp.id === employee.id ? { ...emp, ...employee } : emp))
  ),
  on(deleteEmployee, (state, { id }) => state.filter(emp => emp.id !== id))
);
