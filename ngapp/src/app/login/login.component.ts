import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInUserData = {
    email: '',
    password: ''
  }
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  authUser(){
    this._auth.loginUser(this.logInUserData)
    .subscribe(
      (res:any) => {
        localStorage.setItem('userid',res['email'])
        localStorage.setItem('token',res['_id'])
        if (res['test']==true){
          this._router.navigate(['/videoplayer'])
        }else{
          this._router.navigate(['/test'])
        }
      },
      err => console.log(err)
    )

  }

}
