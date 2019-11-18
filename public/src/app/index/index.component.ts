import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  books = []
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.getBooks();
  }
  getBooks() {
    const observable = this.http.index();
      observable.subscribe((data: any) => {
        this.books = data;
        console.log(this.books)
    })
  }
}
