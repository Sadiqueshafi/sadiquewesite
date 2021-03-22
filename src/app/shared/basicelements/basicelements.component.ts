import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-basicelements',
  templateUrl: './basicelements.component.html',
  styleUrls: ['./basicelements.component.scss']
})
export class BasicelementsComponent implements OnInit {
    simpleSlider = 40;
    doubleSlider = [20, 60];
    state_default: boolean = true;
    focus: any;
    constructor() { }

    ngOnInit() {
      AOS.init();
      const target = document.querySelector('.aboutus');
      const writer = new Typewriter(target, {
          loop: true,

        })
        
        writer
          .type(' Us')
          .rest(500)
          .start()
    }

}
