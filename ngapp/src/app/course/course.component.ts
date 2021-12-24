import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

declare function hide(): any;
declare function initializeprogress(data:any): any;
declare function setvideo(data:any): any;
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router: Router) {  }

  ngOnInit(): void {
    let str = ''+localStorage.getItem('userid')
    var data = {
      email:str
    }
    this._auth.getProgress(data)
    .subscribe(
      res => {
        initializeprogress(res)
      },
      err => console.log(err)
    )
    hide()
  }
  getprocess(){
  let progress={}

  }
}
