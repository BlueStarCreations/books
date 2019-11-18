import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newBook = {
    title: '',
    author: '',
  };
  errors = {
    title: {
      message: ''
    },
    author: {
      message:''
    }
  
  };

  constructor(private http:HttpService, private router:Router) { }

  ngOnInit() {

  }

  createBook() {
    console.log(this.newBook);
    const observable = this.http.create(this.newBook);
    observable.subscribe((data: any) => {
      // console.log(data);
      if ('err' in data) {
        this.errors = data.err.errors;
        console.log(this.errors);
      }
      else {
        this.router.navigate(['/index']);
      }
    })
  }
}
