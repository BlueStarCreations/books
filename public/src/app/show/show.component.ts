import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  oneBook = {
    title: '',
    book: '',
  };
  constructor(private route:ActivatedRoute, private http: HttpService, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      // this gives id as string object
      // console.log(data);
      // console.log(data.id);  // just an id
      this.getBook(data.id);
    })
  }

  getBook(id) {
    // console.log(id)
    const obs = this.http.findById(id);
    obs.subscribe((data: any) => {
      // console.log(data);
      this.oneBook = data;
      // console.log(this.oneBook);
      })
  }
  deleteBook(id) {
    const obs = this.http.deleteOne(id);
    obs.subscribe((data: any) => {
      this.router.navigate(['/index']);
    })
  }

  }


