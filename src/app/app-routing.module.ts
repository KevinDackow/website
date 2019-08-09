import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },  
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
