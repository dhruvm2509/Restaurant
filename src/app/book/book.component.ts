import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }
  public values= ["1" , "2", "3", "4","4+"];
  ngOnInit(): void {
  }

}
