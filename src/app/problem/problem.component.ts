import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';
import {Problem } from './problem.class';
import { problems } from '../data/options';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  @Output () selectedProblem = new EventEmitter<number>();
  filteredproblems: Observable<Problem[]>;
  problemCtrl = new FormControl();
  problems = problems;

  constructor() {
    this.filteredproblems = this.problemCtrl.valueChanges
      .pipe(
        startWith(''),
        map(problem => problem ? this._filterProblems(problem) : this.problems.slice())
      );
  }

  ngOnInit() {
  }
  private _filterProblems(value: string): Problem[] {
    const filterValue = value;
    return this.problems.filter(problem => problem.value.toLowerCase().indexOf(filterValue) === 0);
  }

  optionSelected(event){























































    
    console.log(event);
    this.selectedProblem.emit(event);
  }
  displayFn(problem): string {
    return problem ? problem.value : problem;
} }
