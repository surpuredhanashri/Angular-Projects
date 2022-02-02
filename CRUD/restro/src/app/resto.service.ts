import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://localhost:3000/restaurants';
  rootUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getList() {
    //console.warn("some data")
    // return "data list here"

    return this.http.get(this.url);
  }

  saveResto(data: any) {
    console.warn(data);
    return this.http.post(this.url, data);
  }

  deleteResto(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentResto(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
