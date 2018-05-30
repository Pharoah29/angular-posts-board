import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: User = {} as User;

  isAuthticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    let current = this.authService.findUser(this.user);

    this.isAuthticated = current != null;

    if (this.isAuthticated) {
      //save the user info for authenticatin checks within the auth gaurd
      //can be stored for later use in localstorge for persistance
      this.authService.loggedUser = current;

      this.router.navigate([""]);
    }
  }
}
