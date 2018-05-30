import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WallComponent } from "./components/wall/wall.component";
import { AuthGuard } from "./auth.guard";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
     canActivate: [AuthGuard], //insure we're logged in and all is well

  },

  { path: "login", component: LoginComponent },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
