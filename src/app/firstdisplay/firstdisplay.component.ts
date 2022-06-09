import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-display',
  templateUrl: './firstdisplay.component.html',
  styleUrls: ['./firstdisplay.component.css']
})
export class FirstDisplayComponent implements OnInit {

  constructor(
    private router: Router
  ) { 
  }

  ngOnInit(): void {
  }
  AddOrder(){
    this.router.navigate(['OrderDetail'])
  }

}
