import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  ReadMore:boolean= false;
  visible:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    this.myFunction();
    AOS.init();
    const target = document.querySelector('.service');
    const writer = new Typewriter(target, {
        loop: true,

      })
      
      writer
        .type('Services')
        .rest(500)
        .start()
  }
  
  myFunction() {
    // var dots = document.getElementById("dots");
    // var moreText = document.getElementById("more");
    // var btnText = document.getElementById("myBtn");
  
    // if (dots.style.display === "none") {
    //   dots.style.display = "inline";
    //   btnText.innerHTML = "Read more";
    //   moreText.style.display = "none";
    // } else {
    //   dots.style.display = "none";
    //   btnText.innerHTML = "Read less";
    //   moreText.style.display = "inline";
    // }
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible
  }
}
