import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get('/api/books');
  }
  create(data) {
    return this.http.post('/api/books/', data);
  }
  findById(id) {
    return this.http.get(`/api/books/${id}`)
  }
  updateOne(data, id) {
    return this.http.put(`/api/books/${id}`, data);
  }
  deleteOne(id) {
    return this.http.delete(`/api/books/${id}`);
  }

}
