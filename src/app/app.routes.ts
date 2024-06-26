import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    {
        path: 'home', component: HomeComponent,
    },
    {
        path: 'projects', component: ProjectsComponent
    },
    {
        path: 'resume', component: ResumeComponent

    },
    {
        path: 'contact', component: ContactComponent

    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: 'home', pathMatch: 'full'

    }

];
