import { Component, OnInit, Input } from '@angular/core';
import { problems } from '../data/options';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  @Input() selectedProblem: number;
  taped: Object;
  constructor() { }

  ngOnInit() {
    console.log(problems, this.selectedProblem);
  }
  ngOnChanges(){
    this.taped = {'speed': 0.1,
    'timeout': 1000,
    'hideCursorOnComplete': false,
    'hideCursor': false,
    'cursor': '|'
    }
  }

  getSolution(){
    return problems[this.selectedProblem] ? problems[this.selectedProblem].solution : '';
  }

}
