import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AcademicsComponent } from './academics/academics.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import { CoursesComponent } from './courses/courses.component';
import { TalksComponent } from './talks/talks.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'academics', component: AcademicsComponent },
  { path: 'works', component: WorkExperiencesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'researches', component: ResearchComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'talks', component: TalksComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
