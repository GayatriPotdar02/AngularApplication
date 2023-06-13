import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
newProperty:any;




public registerForm!:FormGroup; 
  surname!: string;
  name!: string;
  simpledata:any=[]
constructor( private myrouter:Router , private myformbuilder:FormBuilder ,private http:HttpClient){}



ngOnInit(){
  this.newProperty = JSON.parse(localStorage.getItem("card") || "");
  console.log(this.newProperty);
  this.registerForm = this.myformbuilder.group({
    name:new FormControl(''),
    surname:new FormControl('')
  })
}

submitdata(){
  let simpledata = {
    name:this.name,
    surname:this.surname,
  }
console.log(simpledata);
this.http.post<any>('http://localhost:3000/gaya',simpledata).subscribe((data) => {
console.log(data);
});
}

}
