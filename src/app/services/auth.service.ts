import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  users: User[] = [{ userName: "admin", password: "admin" }];

  loggedUser: User;

  constructor() {}

  findUser(user: User) {
    return this.users.find(
      u => u.userName == user.userName && u.password == user.password
    );
  }
}
