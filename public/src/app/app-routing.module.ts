import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: "index", component: IndexComponent },
  { path: "create", component: CreateComponent }, // newComponent
  { path: "show/:id", component: ShowComponent }, // RecordComponent
  { path: "edit/:id", component: EditComponent },
  { path: "", pathMatch: "full", redirectTo: "/index" },
  // { path: "", pathMatch: "full", redirectTo: "/" }
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
