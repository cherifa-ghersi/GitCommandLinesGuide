import { Component, OnInit, Input } from '@angular/core';
import { problems } from '../data/options';
import Typewriter from 'typewriter-effect/dist/core';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  @Input() selectedProblem: number;
  taped: Object;
  typewriter;
  constructor() { }
  ngOnInit() {
    console.log(problems, this.selectedProblem);
  }
  ngOnChanges(){
    this.typewriter =  new Typewriter('#typewriter', {
      delay: 75,
      devMode: true
    });
    this.typewriter
    .typeString(this.getSolution())
    .callFunction((elem)=>{
      console.log(elem);
    })
    .start();
  }

  getSolution(){
    return problems[this.selectedProblem] ? problems[this.selectedProblem].solution : '';
  }
  test(elem){
    console.log(elem);
  }
 
}
