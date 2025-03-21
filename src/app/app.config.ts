import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore, ActionReducer } from '@ngrx/store';
import { employeesReducer } from './employees/employees.reducer';

// Meta-reducer to persist state to localStorage
export function persistStateReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);
    localStorage.setItem('employeesState', JSON.stringify(nextState)); // Line 21: localStorage is used here
    return nextState;
  };
}

// Meta-reducer to hydrate state from localStorage on app init
export function hydrateState(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (state === undefined) {
      const persisted = localStorage.getItem('employeesState');
      return persisted ? JSON.parse(persisted) : reducer(state, action);
    }
    return reducer(state, action);
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideStore(
      { employees: employeesReducer },
      { metaReducers: [hydrateState, persistStateReducer] }
    )
  ]
};