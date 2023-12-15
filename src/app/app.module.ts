import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layouts/header/header.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { HomeComponent } from './Layouts/home/home.component';
import { BlogComponent } from '../app/Pages/blog/blog.component';
import { HelpComponent } from '../app/Pages/help/help.component';
import { BlogDetailsComponent } from '../app/Pages/blog-details/blog-details.component';
import { ContactComponent } from '../app/Pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    HelpComponent,
    BlogDetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
