import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cards=[
    {name:"gayu",
    surname:"potdar",
    },{
      name:"monu",
      surname:"potdar"
    }];

   public registerForm!:any; 
  constructor( private myrouter:Router , private myformbuilder:FormBuilder){}

ngOnInit(){
  this.registerForm = this.myformbuilder.group({
    name:new FormControl(''),
    surname:new FormControl('')
  })
}
submitdata(){
  console.log(this.registerForm.values);
}

  buy(card:any){
    //console.log(card);
    localStorage.setItem("card", JSON.stringify(card));
    this.myrouter.navigate(["/about"]);
  }
}
