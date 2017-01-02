/**
 * Created by ayoub on 31/12/2016.
 */
// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import {LoginService} from "./login.service";

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private loginService: LoginService) {}

  canActivate() {
    return this.loginService.isLoggedIn();
  }
}
