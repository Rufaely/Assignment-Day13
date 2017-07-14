import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
    <p>
Maharishi Univerity offers  Consciousness-Based education. With Consciousness-Based education you study traditional subjects while also experiencing inner growth and developing your creativity.
Your awareness expands, improving your ability to absorb knowledge and see the big picture.
    </p>
   `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
