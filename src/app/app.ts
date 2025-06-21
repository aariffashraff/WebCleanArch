import { Component } from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  constructor(private viewportScroller: ViewportScroller) {}
  protected title = 'Clean-Arch';
  ngOnInit() {
    this.viewportScroller.setOffset([0, 80]); // x: 0, y: 80px offset for navbar height
  }

}
