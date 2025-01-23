import { Routes } from '@angular/router';
export const payroll_routes: Routes = [{
    path: 'banklist',
    title: 'Bank list report',
    loadComponent: () => import('./banklist/banklist.component').then(c => c.BanklistComponent)
}];