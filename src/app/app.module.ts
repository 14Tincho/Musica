import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { ImagenService } from './service/imagen.service';
import { FilterimagenesPipe } from './pipes/filterimagen.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FilterimagenesPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ImagenService, FilterimagenesPipe, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
