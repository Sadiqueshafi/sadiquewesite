import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, NgForm} from '@angular/forms'
import { SendingmailService } from '../sendingmail.service';
import AOS from 'aos';
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-contectus',
  templateUrl: './contectus.component.html',
  styleUrls: ['./contectus.component.css']
})
export class ContectusComponent implements OnInit {
  focus: any;
  focus1: any;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
    textarea:new FormControl('')
  });
  url='http:localhost:3000/contactus'
  constructor( private contactus:SendingmailService) { }

  ngOnInit(): void {
    AOS.init();
    const target = document.querySelector('.contactus');
    const writer = new Typewriter(target, {
        loop: true,

      })
      
      writer
        .type(' Us')
        .rest(500)
        .start()
  }
  onSubmit(){
    this.contactus.sendData('sendemail',this.profileForm.value).subscribe((res)=>{
      console.log(res)
    })
    console.log(this.profileForm.value)
    this.profileForm.reset()
    
  }

}
