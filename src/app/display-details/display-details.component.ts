import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  paraShown1: boolean = true;
  loki: string[] = [];
  constructor() { }

  paraHide() {
    this.paraShown1 = !this.paraShown1;
    if (this.paraShown1 == true) {

      this.loki.push(new Date().toLocaleString());

    }
  }

  ngOnInit(): void {
  }

}
