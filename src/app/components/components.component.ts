import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {trigger,state,style,animate, transition} from '@angular/animations';
import Typewriter from 't-writer.js'
@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    .my-element {
  display: inline-block;
  margin: 0 0.5rem;

  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}
    ngb-progressbar {margin-top: 5rem;},.card {display: flex;
  justify-content: center;
  align-items: center;
}
    `],
    animations:[
        trigger('popOverState',[
            state('show',style({
                opacity:1
            })),
            state('hide',style({
                opacity:0
            })),
            transition('show => hide',animate('600ms ease-out')),
            transition('hide => show',animate('1000ms ease-in'))
        ])
    ]
})

export class ComponentsComponent implements OnInit {
    position:string;
    show= false

    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( private renderer : Renderer2) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }
    
    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        const target = document.querySelector('.presentation-subtitle');
        const writer = new Typewriter(target, {
            loop: true,
            typeColor: 'yellow'
          })
          
          writer
            .type(' Angular 8 Devloper From Katihar')
            .rest(500)
            .start()
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }
    }
    changesPosition(newPosition:string){
        this.position = newPosition
    }
    
      get StateName() {
          return this.show ? 'show': 'hide'
      }
      toggle(){
          this.show = !this.show
      }

}
