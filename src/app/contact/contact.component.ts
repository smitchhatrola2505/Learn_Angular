import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  data: any = '';
  on(login: any) {
    console.log(login);
    this.data = login;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
