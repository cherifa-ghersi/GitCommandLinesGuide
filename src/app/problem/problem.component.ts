import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Problem } from './problem.class';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {
  filteredproblems: Observable<Problem[]>;
  problemCtrl = new FormControl();

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
    const filterValue = value.toLowerCase();

    return this.problems.filter(problem => problem.name.toLowerCase().indexOf(filterValue) === 0);
  }

  problems : Problem[] = [
    {
      name: 'Arkansas'
    },
    {
      name: 'California'

    },
    {
      name: 'Florida'
    },
    {
      name: 'Texas'
    }
  ];

}
