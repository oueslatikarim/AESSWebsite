import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../app/Pages/blog/blog.component';
import { HomeComponent } from './Layouts/home/home.component';
import { HelpComponent } from '../app/Pages/help/help.component';
import { BlogDetailsComponent } from '../app/Pages/blog-details/blog-details.component';
import { ContactComponent } from '../app/Pages/contact/contact.component';

const routes: Routes = [
  
  {path: 'home', component: HomeComponent},
  {path: 'activities',  component: BlogComponent },
  {path: 'help',  component: HelpComponent },
  {path: 'blog-details',  component: BlogDetailsComponent },
  {path: 'contact', component: ContactComponent},
  
  {path: '', redirectTo: 'home', pathMatch: 'full'}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
