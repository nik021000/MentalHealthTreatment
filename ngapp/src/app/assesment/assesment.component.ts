import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.css']
})
export class AssesmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = "/assesment"
  }

}
