import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AllprojectsComponent } from './components/allprojects/allprojects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HtmlcssComponent } from './components/htmlcss/htmlcss.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { JsComponent } from './components/js/js.component';
import { AngularComponent } from './components/angular/angular.component';

export const routes: Routes = [
  // layout here
  { path: '', redirectTo: 'home', pathMatch: 'full', title: 'home' },
  { path: 'home', component: HomeComponent, title: 'home' },
  {
    path: 'resume',
    component: ResumeComponent,
    title: 'resume',
    children: [
      { path: '', redirectTo: 'experience', pathMatch: 'full', title: '' },
      {
        path: 'experience',
        component: ExperienceComponent,
        title: 'experience',
      },
      {
        path: 'education',
        loadComponent: () =>
          import('./components/education/education.component').then(
            (c) => c.EducationComponent
          ),
        title: 'education',
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./components/skills/skills.component').then(
            (c) => c.SkillsComponent
          ),
        title: 'skills',
      },
    ],
  },
  {
    path: 'allprojects',
    loadComponent: () =>
      import('./components/allprojects/allprojects.component').then(
        (c) => c.AllprojectsComponent
      ),
    title: 'allprojects', children:[
      {path:"" , redirectTo:"html&css" , pathMatch:"full" , title:"html&css project"} ,
      {path:"html&css" , component:HtmlcssComponent ,title:"html&css project" } ,
      {path:"bootstrap" , component:BootstrapComponent ,title:"bootstrap project" } ,
      {path:"js" , component:JsComponent ,title:"js project" } ,
      {path:"angular" , component:AngularComponent ,title:"angular project" } ,
    ],
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
    title: 'contactme',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
    title: 'home',
  },
];
