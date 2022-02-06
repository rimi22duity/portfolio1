import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { AcademicsComponent } from './academics/academics.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResearchComponent } from './research/research.component';
import { CoursesComponent } from './courses/courses.component';
import { TalksComponent } from './talks/talks.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    HomeComponent,
    SidenavListComponent,
    AcademicsComponent,
    WorkExperiencesComponent,
    ProjectsComponent,
    ResearchComponent,
    CoursesComponent,
    TalksComponent,
    ResumeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
