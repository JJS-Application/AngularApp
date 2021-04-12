import { Component, OnInit } from '@angular/core';
import {AppModule} from '../app.module'

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  title = "Jaipur  job seeker"
  constructor() { }

  ngOnInit(): void {
  }

}
