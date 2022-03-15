import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { __asyncValues } from 'tslib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_Learn';
  
  loginForm = new FormGroup({

     email:new FormControl('',Validators.required),
     password:new FormControl('',Validators.required)
       
    })
  
  
  
  
  data:any = '';
  on(login:any){
    console.log(login);
    this.data = login;
  }

  
  // data = "";
  // constructor(private user:UserDataService){
  //   let d = this.user.getData() ;
  //   this.data = d.name;

  // }
  // -- angular interpolation --

  // name = 'smit chhatrola';

  // -- Function --
  // get(){
  //   return this.name;
  // }

  // -- object --
  // obj={
  //   name : 'smit',
  //   age:20
  // }

  // -- array --
  // arr=['smit','sahil']

  // -- site url --
  // siteUrl = window.location.href

  // -- function call --
  // getName(){
  //   alert('smit')
  // }

  // -- events --

  // myevent(evt:any){
  //   console.warn(evt);
  // }

  // -- get value from user and print it -- 

  // current = " "
  // getVal(value:any){
  //   return this.current = (value).value;
  // }

//   name = "smit";
//  disabled = true;
//   box(){
//     this.disabled = false;
// //   }
// data = [{
//   name : 'smit',
//   age : 20,
//   email : "@gmail.com"
// },
// {
//   name : 'sahil',
//   age : 20,
//   email : "@gmail.com"
// },
// {
//   name : 'Patel',
//   age : 20,
//   email : "@gmail.com"
// }
// ];
// name = "Smit chhatrola";
// today = Date.now();
// val = 10;

}