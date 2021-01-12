import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AssignmentsComponent} from './assignments/assignments.component'
import {SyllabusComponent} from './syllabus/syllabus.component'
import {GradesComponent} from './grades/grades.component'
import { ProfileComponent } from './profile/profile.component';
import {CoursesComponent} from './courses/courses.component'
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path : '', component: AppComponent, canActivate: [AuthGuard]},
  {path : 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
  {path : 'assignments', component: AssignmentsComponent, canActivate: [AuthGuard]},
  {path : 'syllabus', component: SyllabusComponent, canActivate: [AuthGuard]},
  {path : 'grades', component: GradesComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
