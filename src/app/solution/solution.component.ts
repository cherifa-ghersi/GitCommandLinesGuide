import { Component, OnInit, Input } from '@angular/core';
import { problems } from '../data/options';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  @Input() selectedProblem : number;

  constructor() { }

  ngOnInit() {
    console.log(this.selectedProblem);
  }

}
