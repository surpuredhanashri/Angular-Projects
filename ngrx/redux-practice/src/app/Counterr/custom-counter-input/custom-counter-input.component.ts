import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { customIncrement, customNameChange } from '../CounterState/counter.action';
import { CounterState } from '../CounterState/counter.state';
import { getName } from '../CounterState/custom.selector';
import { AppState } from '../../state/app.state';
@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
})
export class CustomCounterInputComponent implements OnInit {
  value:number=0;
  name$!:Observable<string>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.name$ =this.store.select(getName)
  }

  onAdd(){
    this.store.dispatch(customIncrement({count:+this.value}))
  }

  changeName(){
    this.store.dispatch(customNameChange())
  }
}
