import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3000/api/register"
  private _loginUrl = "http://localhost:3000/api/login"
  private _questionUrl = "http://localhost:3000/api/question"
  private _answerUrl = "http://localhost:3000/api/answer"
  constructor(private http: HttpClient) { }

  registerUser(user: { _id:string; name: string; email: string; password: string; confirmPassword: string; }){
    return this.http.post(this._registerUrl,user)
  }

  loginUser(user: { email: string; password: string; }){

    return this.http.post(this._loginUrl,user)
  }

  question(){
    return this.http.get(this._questionUrl)
  }

  answer(data: {email: string; answers: string[];test:boolean; }){
    return this.http.post(this._answerUrl,data)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
