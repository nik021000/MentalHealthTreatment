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
  private _progressUrl = "http://localhost:3000/api/progress"
  private _getProgressUrl = "http://localhost:3000/api/getProgress"
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

  answer(data: {email: string; answers: String;test:boolean;Depression:String;Anxiety:String;Stress:String}){
    return this.http.post(this._answerUrl,data)
  }

  progress(data: {_id:string;email: string; course: String; video1:Number;video2:Number;Article1:String}){
    return this.http.post(this._progressUrl,data)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  getProgress(user: { email: string;}){
    return this.http.post(this._getProgressUrl,user)
  }
}
