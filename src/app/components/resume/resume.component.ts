import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    const target = document.querySelector('.res');
    const writer = new Typewriter(target, {
        loop: true,

      })
      
      writer
        .type('Resume')
        .rest(500)
        .start()
  }

}
