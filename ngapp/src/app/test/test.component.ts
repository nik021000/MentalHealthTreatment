import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as $ from 'jquery';

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
  constructor(private _auth: AuthService) { }

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
    submit()
  }

}
