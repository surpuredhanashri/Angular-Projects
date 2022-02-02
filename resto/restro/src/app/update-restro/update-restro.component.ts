import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})

export class UpdateRestroComponent implements OnInit {
  alert:boolean=false

  editRestro = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
 
  constructor(private router:ActivatedRoute, private resto:RestoService) { }

  restodata:any={}
  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
   
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result)=>{
      console.warn(result)
      this.restodata=result;
     this.editRestro = new FormGroup({
    name: new FormControl(this.restodata.name),
    email: new FormControl(this.restodata.email),
    address: new FormControl(this.restodata.address)
  })
 
    })
  
  }

  collection( ){          //onsubmit change
    console.warn("item",this.editRestro.value) 
    this.resto.updateResto(this.router.snapshot.params.id,this.editRestro.value).subscribe((result)=>{
      console.warn("result",result)
      this.alert=true
    })
  }
  closeAlert(){
    this.alert=false
  }
}
