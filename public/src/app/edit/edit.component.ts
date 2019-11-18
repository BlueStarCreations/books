import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  oneBook = {
    title: '',
    author: ''
  }
  constructor(private http:HttpService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {this.route.params.subscribe((data: any) => {
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

  editBook(id) {
    console.log(this.oneBook);
    const obs = this.http.updateOne(this.oneBook, id);
    obs.subscribe((data: any) => {
      if ('errors' in data) {
        console.log("we have problem");
        console.log(data);
      }
      else {
        this.router.navigate(['/index']);
      }
    })
  }
}
