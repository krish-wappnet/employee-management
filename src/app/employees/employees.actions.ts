import { createAction, props } from '@ngrx/store';

export const addEmployee = createAction(
  '[Employee] Add Employee',
  props<{ employee: any }>()
);

export const updateEmployee = createAction(
  '[Employee] Update Employee',
  props<{ employee: any }>()
);

export const deleteEmployee = createAction(
  '[Employee] Delete Employee',
  props<{ id: number }>()
);
