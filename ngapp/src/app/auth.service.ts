import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"
  private _questionUrl = "http://localhost:3000/api/question"
  constructor(private http: HttpClient) { }

  registerUser(user: { name: string; email: string; password: string; confirmPassword: string; }){
    return this.http.post(this._registerUrl,user)
  }

  loginUser(user: { email: string; password: string; }){

    return this.http.post(this._loginUrl,user)
  }

  question(){
    return this.http.get(this._questionUrl)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
