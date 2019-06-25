import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';

const routes: Routes = [
  { path: 'directory/:calc', component: DirectoryComponent},
  { path: 'directory', component: DirectoryComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DirectoryComponent, HomeComponent];