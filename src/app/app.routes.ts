import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
    { path: 'Dashboard', title: 'Dashboard', component: DashboardComponent },
    {
        path: 'payroll',
        title: 'Payroll reports',
        loadComponent: () => import('./payroll-reports/payroll-reports.component').then(c => c.PayrollReportsComponent),
        children: [
            {
                path: 'banklist',
                title: 'Bank list report',
                loadComponent: () => import('./payroll-reports/banklist/banklist.component').then(c => c.BanklistComponent)
            },
            {
                path: 'audit',
                title: 'Audit report',
                loadComponent: () => import('./payroll-reports/audit/audit.component').then(c => c.AuditComponent)
            }
        ]
    },
    { path: "payslip", title: 'Payslip reports', loadComponent: () => import('./payslip-reports/payslip-reports.component').then(c => c.PayslipReportsComponent) },
    { path: '**', component: ErrorComponent }
];
