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
      answers:'',
      test:true,
      Depression:'',
      Anxiety:'',
      Stress:'',
    }

    let output=submit()
    let str = ''+localStorage.getItem('userid')
    data['email']=str;
    data['Stress'] = output.pop()
    data['Anxiety'] = output.pop()
    data['Depression'] = output.pop()
    data['answers'] = output.pop();
    let progress = {
      _id:data['email'],
      email:data['email'],
      course:'',
      video1:0,
      video2:0,
      Article1: 'Not Completed'
    }
    if(data['Stress'] == 'Extreamely Severe') {
      progress['email']=data['email']
      progress['course']='Stress'
    }else if(data['Depression'] == 'Extreamely Severe') {
      progress['email']=data['email']
      progress['course']='Depression'
    }else{
      progress['course']='Anxiety'
      progress['email']=data['email']
    }
    this._auth.progress(progress)
    .subscribe(
      res => {
        console.log(res)
      },
      err=> console.log(err)
    )
    this._auth.answer(data)
    .subscribe(
      res => {
        if(['Normal','Mild'].includes(data['Stress']) && ['Normal','Mild'].includes(data['Depression']) && ['Normal','Mild'].includes(data['Anxiety'])){
          this._router.navigate(['/home'])
        }else{
        this._router.navigate(['/course'])
        }
      },
      err => console.log(err)
    )
  }

}
