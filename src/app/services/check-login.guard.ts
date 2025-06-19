import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from "app/services/auth.service";

@Injectable()
export class CheckLoginGuard implements CanActivateChild {

    constructor(private authService:AuthService, private router: Router){}

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.checkLogged().catch((err) => {
            this.router.navigate(['/login']);
            return false;
        });
    }
}