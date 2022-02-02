import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../CounterState/counter.action';
import { CounterState } from '../CounterState/counter.state';
import { AppState } from '../../state/app.state';
@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
})
export class CounterButtonComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  OnIncrement(){
    this.store.dispatch(increment());
  }

  OnDecrement(){
    this.store.dispatch(decrement());
  }

  Onreset(){
    this.store.dispatch(reset());
  }
}
