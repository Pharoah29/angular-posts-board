import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { WallComponent } from "./components/wall/wall.component";
import { HomeComponent } from "./components/home/home.component";
import { FormsModule } from "@angular/forms";
import { AddNoteModalComponent } from './components/modals/add-note-modal/add-note-modal.component';
import { ViewNoteModalComponent } from './components/modals/view-note-modal/view-note-modal.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, WallComponent, HomeComponent, AddNoteModalComponent, ViewNoteModalComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
