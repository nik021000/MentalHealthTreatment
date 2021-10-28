import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as $ from 'jquery';

declare function start(): any;
declare function show(): any;


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {

  }

  startTest(){
    console.log("Hello")
    start()
    window.location.href = "/assesment"
  }
  showQuestion(){
    console.log("Hello")
    show()
    window.location.href = "/assesment"
  }

}
