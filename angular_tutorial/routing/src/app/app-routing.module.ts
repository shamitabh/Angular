import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // for home page redirect to 'departments'. 'pathMatch: full' means
  // the requested url should completely match with the below path
  // only then it will be redirected.
  // other possible value is 'prefix' instead of 'full'.
  { path: '', redirectTo: '/departments', pathMatch: 'full' },

  { path: 'departments', component: DepartmentListComponent },
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent },
    ],
  },
  { path: 'employees', component: EmployeeListComponent },

  // if any other routes visited(wild card routing)
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// this is optional, but prevents multiple import of the components
export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  DepartmentDetailComponent,
  PageNotFoundComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent,
];
