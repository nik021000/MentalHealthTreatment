import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    _id:'',
    name:'',
    email: '',
    password: '',
    confirmPassword:'',
    test:false,
    answers:'',
    Depression:'',
    Anxiety:'',
    Stress:''
  }
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {

  }

  registerUser(){

    this._auth.registerUser(this.registerUserData)
    .subscribe(
      (res:any) => {
        console.log(res)
        localStorage.setItem('token',res.token)
        localStorage.setItem('userid',this.registerUserData['email'])
        this._router.navigate(['/test'])
      },
      err => console.log(err)
    )
  }

}
