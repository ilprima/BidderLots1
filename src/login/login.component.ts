import {Component, OnInit} from '@angular/core';
import {User} from "../entities/user";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  newUser : User;
  showRegister = false;



  ngOnInit(){
    this.newUser = new User();
    this.newUser.company = true;
  }

  private login (){
    //if(this.newUser.password == "" || this.newUser.username == "")

  }

  private selectedCompany (){
      document.getElementById("label2").setAttribute("class", "col-sm-6 w3-text-white w3-red");
    document.getElementById("label1").setAttribute("class", "col-sm-6 w3-text-teal w3-white");
    this.newUser.company = true;

  }
  private selectedPerson (){
    document.getElementById("label1").setAttribute("class", "col-sm-6 w3-text-white w3-red");
    document.getElementById("label2").setAttribute("class", "col-sm-6 w3-text-teal w3-white");
    this.newUser.company = false;
  }
}
