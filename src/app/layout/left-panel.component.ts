import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  title = "Jaipur  job seeker"
  constructor() {     
  }

  ngOnInit(): void {
  }

}