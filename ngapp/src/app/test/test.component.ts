import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as $ from 'jquery';
import { data } from 'jquery';
import { Router } from '@angular/router';

declare function submit(): any;
declare function show(): any;
declare function hide(): any;
declare function initialize(data:any): any;


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
    hide()
  }

  startTest(){
    let question={}
    this._auth.question()
    .subscribe(
      res => {
        initialize(res)
        show()
      },
      err => console.log(err)
    )
  }
  showQuestion(){
    show()
  }
  submit(){
    let data={
      email:'',
      answers:[],
      test:true
    }

    let answer=submit()
    let str = ''+localStorage.getItem('userid')
    data['email']=str;
    data['answers'] = answer
    this._auth.answer(data)
    .subscribe(
      res => {
        console.log('heelo')
        this._router.navigate(['/home'])
      },
      err => console.log(err)
    )
  }

}
