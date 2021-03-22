import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    const target = document.querySelector('.img');
    const writer = new Typewriter(target, {
        loop: true,

      })
      
      writer
        .type(' Images')
        .rest(500)
        .start()
  }

}
