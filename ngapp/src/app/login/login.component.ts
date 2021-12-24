import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

declare function verify(): any;
declare function wrongemail(): any;

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
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.logInUserData.email.match(mailformat))
    {
      this._auth.loginUser(this.logInUserData)
      .subscribe(
        (res:any) => {
          localStorage.setItem('userid',res['email'])
          localStorage.setItem('token',res['_id'])
          if (res['test']==true){
            this._router.navigate(['/home'])
          }else{
            this._router.navigate(['/test'])
          }
        },
        err => {
          verify()
          console.log(err)
        }
      )
    }
    else{
      wrongemail()
    }

  }

}
