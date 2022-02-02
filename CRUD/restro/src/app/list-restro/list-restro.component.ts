import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
@Component({
  selector: 'app-list-restro',
  templateUrl: './list-restro.component.html',
  styleUrls: ['./list-restro.component.css'],
})
export class ListRestroComponent implements OnInit {
  constructor(private resto: RestoService) {} //made instance

  collection: any = [];

  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    });
  }

  deleteResto(item: any) {
    console.warn(this.collection);
    this.collection.splice(item - 1, 1); // 1- delete, 2-add, 3-update
    this.resto.deleteResto(item).subscribe((result) => {
      console.warn(result);
    });
  }
}
