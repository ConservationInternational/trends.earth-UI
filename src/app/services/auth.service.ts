import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Router } from "@angular/router";

@Injectable()
export class TokenService {
    private _token:string = null;

    set token(token:string){
        if (!token) {
            localStorage.removeItem('trendsearth-token');
        } else {
            localStorage.setItem('trendsearth-token', token);
        }
        this._token = token;
    }

    get token(){
        if (!this._token) {
            this._token = localStorage.getItem('trendsearth-token');
        }
        return this._token;
    }
}

@Injectable()
export class AuthService {

    user = null;
    token:string = null;

    constructor(private http:HttpClient, private tokenService: TokenService, private router: Router){

    }

    login(email:string, password:string){
        return this.http.post<any>(`${environment.apiUrl}/auth`, {
            email,
            password
        }).toPromise()
        .then((body:any) => this.tokenService.token = body.access_token);
    }

    checkLogged(): Promise<boolean>{
        return this.http.get<any>(`${environment.apiUrl}/api/v1/user/me`)
        .toPromise()
        .then((body) => {
            this.user = body.data;
            return true;
        });
    }

    logout(){
        this.user = null;
        this.token = null;
        this.tokenService.token = null;
        this.router.navigate(['/login']);
    }

    recoverPass(email:string){
        return this.http.post<any>(`${environment.apiUrl}/api/v1/user/${email}/recover-password`, {})
        .toPromise()
        .then((body:any) => this.tokenService.token = body.access_token);
    }
}